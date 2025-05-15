"use client";

import React, { useState, useEffect } from "react";

// Tipe data untuk item penyewaan
interface RentalItem {
  id: string;
  nama: string;
  barang: string;
  tanggalPenyewaan: string;
  tanggalPengembalian: string;
  keterangan: string;
  isReturned: boolean;
}

export default function RentalApp() {
  // State untuk input form
  const [nama, setNama] = useState("");
  const [barang, setBarang] = useState("");
  const [tanggalPenyewaan, setTanggalPenyewaan] = useState("");
  const [tanggalPengembalian, setTanggalPengembalian] = useState("");
  const [keterangan, setKeterangan] = useState("");
  
  // State untuk menyimpan semua data penyewaan
  const [rentalItems, setRentalItems] = useState<RentalItem[]>([]);

  // Load data from localStorage when component mounts
  useEffect(() => {
    const savedData = localStorage.getItem('rentalItems');
    if (savedData) {
      setRentalItems(JSON.parse(savedData));
    }
  }, []);

  // Save data to localStorage whenever rentalItems changes
  useEffect(() => {
    localStorage.setItem('rentalItems', JSON.stringify(rentalItems));
  }, [rentalItems]);

  // Fungsi untuk menambah item baru
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validasi input sederhana
    if (!nama || !barang || !tanggalPenyewaan || !tanggalPengembalian) {
      alert("Semua field harus diisi kecuali keterangan!");
      return;
    }
    
    // Membuat item baru
    const newItem: RentalItem = {
      id: Date.now().toString(),
      nama,
      barang,
      tanggalPenyewaan,
      tanggalPengembalian,
      keterangan,
      isReturned: false,
    };
    
    // Menambahkan ke daftar penyewaan
    setRentalItems([...rentalItems, newItem]);
    
    // Reset form
    setNama("");
    setBarang("");
    setTanggalPenyewaan("");
    setTanggalPengembalian("");
    setKeterangan("");
  };

  // Fungsi untuk toggle status pengembalian
  const toggleReturnStatus = (id: string) => {
    setRentalItems(
      rentalItems.map((item) =>
        item.id === id ? { ...item, isReturned: !item.isReturned } : item
      )
    );
  };
  
  // Fungsi untuk menghapus item
  const deleteItem = (id: string) => {
    if (confirm('Apakah Anda yakin ingin menghapus data ini?')) {
      setRentalItems(rentalItems.filter(item => item.id !== id));
    }
  };

  // Format tanggal untuk tampilan yang lebih baik
  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <div className="max-w-[1300px] mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">Sistem Pencatatan Penyewaan Barang</h1>
      
      {/* Form Input Data */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4">Input Data Penyewaan</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nama Penyewa
              </label>
              <input
                type="text"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Masukkan nama penyewa"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Barang yang Disewa
              </label>
              <input
                type="text"
                value={barang}
                onChange={(e) => setBarang(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Masukkan nama barang"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Tanggal Penyewaan
              </label>
              <input
                type="date"
                value={tanggalPenyewaan}
                onChange={(e) => setTanggalPenyewaan(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Tanggal Pengembalian
              </label>
              <input
                type="date"
                value={tanggalPengembalian}
                onChange={(e) => setTanggalPengembalian(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Keterangan
              </label>
              <textarea
                value={keterangan}
                onChange={(e) => setKeterangan(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Tambahkan keterangan (opsional)"
                rows={3}
              />
            </div>
          </div>
          
          <div className="mt-6 flex justify-center gap-4">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Simpan
            </button>
          </div>
        </form>
        
      </div>
      
      {/* Tabel Data Penyewaan */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Data Penyewaan</h2>
        
        {rentalItems.length === 0 ? (
          <p className="text-gray-500 text-center py-4">Belum ada data penyewaan</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-2 px-4 border-b text-left">No</th>
                  <th className="py-2 px-4 border-b text-left">Nama Penyewa</th>
                  <th className="py-2 px-4 border-b text-left">Barang</th>
                  <th className="py-2 px-4 border-b text-left">Tanggal Penyewaan</th>
                  <th className="py-2 px-4 border-b text-left">Tanggal Pengembalian</th>
                  <th className="py-2 px-4 border-b text-left">Keterangan</th>
                  <th className="py-2 px-4 border-b text-left">Status</th>
                  <th className="py-2 px-4 border-b text-left">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {rentalItems.map((item, index) => (
                  <tr key={item.id} className={item.isReturned ? "bg-green-50 hover:bg-green-100" : "hover:bg-gray-50"}>
                    <td className="py-2 px-4 border-b">{index + 1}</td>
                    <td className="py-2 px-4 border-b">{item.nama}</td>
                    <td className="py-2 px-4 border-b">{item.barang}</td>
                    <td className="py-2 px-4 border-b">{formatDate(item.tanggalPenyewaan)}</td>
                    <td className="py-2 px-4 border-b">{formatDate(item.tanggalPengembalian)}</td>
                    <td className="py-2 px-4 border-b">{item.keterangan || "-"}</td>
                    <td className="py-2 px-4 border-b">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          checked={item.isReturned}
                          onChange={() => toggleReturnStatus(item.id)}
                          className="h-4 w-4 text-blue-600 rounded border-gray-300 mr-2"
                        />
                        <span className={item.isReturned ? "text-green-600 font-medium" : "text-orange-500"}>
                          {item.isReturned ? "Sudah Kembali" : "Belum Kembali"}
                        </span>
                      </div>
                    </td>
                    <td className="py-2 px-4 border-b">
                      <button
                        onClick={() => deleteItem(item.id)}
                        className="text-red-600 hover:text-red-800"
                      >
                        Hapus
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}