<template>
    <Head>
  <Title>List Country Catalog</Title>
  <Meta name="List Country Catalog " />
</Head>

    <v-app>
        <v-main>
            <div class="px-4 sm:px-6 lg:px-8">

                <v-data-table :headers="headers" :search="search" :items="countries" :items-per-page="25"
                    class="elevation-1">

                    <template v-slot:top>
                        <input v-model.trim="search" cols="12" sm="12" md="6" type="email" name="email" id="email"
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="Search Country" />

                    </template>

                    <template v-slot:[`item.name.common`]="{ item }">
                        <CountryDetail :item="item"/>

                    </template>

                    <template v-slot:[`item.flags.png`]="{ item }">
                        <v-img width="55" aspect-ratio="16/9" cover :src="item.flags.png"></v-img>

                    </template>
                    <template v-slot:[`item.altSpellings`]="{ item }">
                        <v-chip v-for="spelling in item.altSpellings" :key="spelling" class="ma-2" color="green"
                            outlined>
                            {{ spelling }}
                        </v-chip>

                    </template>
                    <template v-slot:[`item.idd`]="{ item }">
                        <span>{{ item.idd.root  }}</span>
                        <v-chip v-for="suffixe in item.idd.suffixes" :key="spelling" class="ma-2" color="green"
                            outlined>
                            {{ suffixe }}
                        </v-chip>

                    </template>
                </v-data-table>

            </div>
        </v-main>
    </v-app>
</template>

<style>
.v-data-table th {
    color: blue;
}
</style>

<script setup>

import { reactive, ref } from 'vue';


const { data } = await useFetch("https://restcountries.com/v3.1/all");
const countries = data.value || [];
const search = ref();
const headers = reactive([
    {
        text: 'Image',
        value: 'flags.png',

    },
    { text: 'Official', value: 'name.official', sortable: true },
    { text: 'Code2', value: 'cca2' },
    { text: 'Code3', value: 'cca3' },
    {
        text: 'Name', value: 'name.common', align: 'start',
        sortable: true,
    },
    { text: 'AltSpellings', value: 'altSpellings' },
    { text: 'Idd', value: 'idd' },
]);


</script>
