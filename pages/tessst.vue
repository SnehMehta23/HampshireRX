<template>
    <div class="min-h-screen bg-gray-50">
      <!-- Navigation -->
      <nav class="bg-[#F7F7F5] text-black p-4">
        <div class="container mx-auto flex items-center justify-between">
          <div class="flex items-center space-x-8">
            <NuxtLink to="/" class="">
              <img src="~/public/images/logos/primaryWideLogo.webp" alt="Hampshire Pharmacy Logo" class="w-64">
            </NuxtLink>
            <!-- <SearchBar /> -->
          </div>
          <div class="flex items-center space-x-6">
            <NuxtLink to="/" class="">Home</NuxtLink>
            <NuxtLink to="/about" class="">About Us</NuxtLink>
            <NuxtLink to="/faq" class="">FAQ</NuxtLink>
            <NuxtLink to="/transfer-prescription" class="">Prescription Transfer</NuxtLink>
          </div>
        </div>
      </nav>
  
      <!-- Free shipping banner -->
      <div class="bg-pharmaBlue-400 text-white text-center py-2">
        Save money on your prescription medications with Hampshire Pharmacy
      </div>
  
      <!-- Breadcrumb -->
      <div class="container mx-auto py-4">
        <div class="flex items-center space-x-2 text-sm">
          <NuxtLink to="/" class="text-blue-500">Home</NuxtLink>
          <span>/</span>
          <NuxtLink to="/sildenafil" class="text-blue-500">Sildenafil (Viagra)</NuxtLink>
          <!-- <span>/</span> -->
        </div>
      </div>
  
      <!-- Main Content -->
      <main class="container mx-auto px-4 py-8">
        <div class="grid grid-cols-2 gap-12">
          <!-- Left Column - Product Image and Info -->
          <div>
            <div class="bg-blue-50 p-8 rounded-lg mb-8">
              <img src="/public/images/prescriptionHRXBottle.png" alt="Medicine Bottle" class="mx-auto h-48 w-48">
            </div>
            <div class="space-y-6">
              <div class="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>Prescription Required</span>
              </div>
              <div class="space-y-4">
                <div>
                  <h2 class="text-xl font-semibold mb-2">Uses of Sildenafil (Viagra)</h2>
                  <p class="text-gray-700">
                    Sildenafil is the generic form of the brand-name medication Viagra. Sildenafil is a certain type of enzyme inhibitor used to treat
                    erectile dysfunction (ED) in men. It works by helping to relax muscles and increase blood flow to certain areas of the body.
                  </p>
                </div>
              </div>
            </div>
          </div>
  
          <!-- Right Column - Product Selection and Price -->
          <div class="bg-white p-8 rounded-lg shadow-lg h-fit">
            <div class="mb-8">
              <h1 class="text-3xl font-semibold mb-2">Sildenafil (Viagra)</h1>
            </div>
  
            <div class="space-y-6">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">FORM</label>
                <div class="flex space-x-4">
                  <button class="px-6 py-2 bg-blue-100 text-blue-800 rounded-md">Tablet</button>
                  <button class="px-6 py-2 border border-gray-300 text-gray-700 rounded-md">Tablets</button>
                </div>
              </div>
  
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">STRENGTH</label>
                <div class="flex space-x-4">
                  <button class="px-6 py-2 border border-gray-300 text-gray-700 rounded-md">20 mg</button>
                  <button class="px-6 py-2 bg-blue-100 text-blue-800 rounded-md">50 mg</button>
                  <button class="px-6 py-2 border border-gray-300 text-gray-700 rounded-md">100 mg</button>
                </div>
              </div>
  
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">PACKAGE SIZE</label>
                <div class="flex space-x-4">
                  <button class="px-6 py-2 bg-blue-100 text-blue-800 rounded-md">30</button>
                  <button class="px-6 py-2 border border-gray-300 text-gray-700 rounded-md">60</button>
                  <button class="px-6 py-2 border border-gray-300 text-gray-700 rounded-md">90</button>
                </div>
              </div>
  
              <div class="flex items-center justify-between border-t border-b py-4 my-6">
                <div>
                  <p class="text-sm text-gray-600">Tablet • 50 mg • 30ct</p>
                </div>
                <div class="text-right">
                  <p class="text-3xl font-bold">$31.00</p>
                </div>
              </div>
  
              <button class="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition-colors flex items-center justify-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span>Transfer My Prescription</span>
              </button>
  
              <p class="text-center text-sm text-gray-600 mt-4">
                Don't see your strength or quantity?
                <a href="tel:+8476832244" class="text-blue-500 hover:underline">Call Support</a>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  </template>