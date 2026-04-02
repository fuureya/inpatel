<template>
  <div class="flex items-center justify-center h-screen bg-zinc-50 dark:bg-zinc-900 px-6 transition-colors duration-300">
    <div class="text-center max-w-md">
      <h1 class="text-9xl font-black text-gray-200 dark:text-zinc-800 mb-4 tracking-tighter transition-colors duration-300">404</h1>
      <h2 class="text-3xl font-black text-gray-900 dark:text-white mb-4 uppercase tracking-tight">Halaman Tidak Ditemukan</h2>
      <p class="text-lg text-gray-500 dark:text-zinc-400 font-medium mb-10 leading-relaxed">Maaf, halaman yang Anda cari tidak tersedia atau telah dipindahkan.</p>
      <router-link to="/" class="inline-block bg-telkom-red text-white px-10 py-4 rounded-lg font-black uppercase tracking-widest text-sm shadow-xl shadow-telkom-red/20 transition-all hover:bg-black">
        Kembali ke Beranda
      </router-link>
    </div>
  </div>
</template>
