<template>
<Head>
  <Title>Dashboard Country Catalog</Title>
  <Meta name="Dashboard Country Catalog " />
</Head>

    <div>
      <h3 class="text-base font-semibold leading-6 text-gray-900">Last 30 days</h3>
      <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
        <div v-for="item in stats" :key="item.name" class="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
          <dt class="truncate text-sm font-medium text-gray-500">{{ item.name }}</dt>
          <dd class="mt-1 text-3xl font-semibold tracking-tight text-gray-900">{{ item.stat }}</dd>
        </div>
      </dl>
    </div>
  </template>
  
  <script setup>

  const stats = [
    { name: 'All Country', stat: '250' },

  ]
  </script>