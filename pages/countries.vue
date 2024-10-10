<template>


    <div class="px-4 sm:px-6 lg:px-8">
        <v-data-table v-if="countries.length > 0" :headers="headers" :search="search" :items="countries" :items-per-page="25" class="elevation-1">
            <template v-slot:top>
                <input v-model.trim="search" cols="12" sm="12" md="6" type="text" name="search" id="search"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Search Country" />
            </template>

            <template v-slot:item.name.common="{ item }">
                <CountryDetail :item="item" />
            </template>

            <template v-slot:item.flags.png="{ item }">
                <v-img width="55" aspect-ratio="16/9" cover :src="item.flags.png"></v-img>
            </template>

            <template v-slot:item.altSpellings="{ item }">
                <v-chip v-for="spelling in item.altSpellings" :key="spelling" class="ma-2" color="green" outlined>
                    {{ spelling }}
                </v-chip>
            </template>

            <template v-slot:item.idd="{ item }">
            
                <v-chip class="ma-2" color="green" outlined>
                    {{ item.idd.root }}
                </v-chip>
            </template>
        </v-data-table>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const { data } = await useFetch("https://restcountries.com/v3.1/all");
const countries = data.value || [];
const search = ref('');
const headers = ref([
    { title: 'Image', key: 'flags.png' ,sortable: false},
    { title: 'Official', key: 'name.official', sortable: true },
    { title: 'Code2', key: 'cca2' ,sortable: false},
    { title: 'Code3', key: 'cca3' ,sortable: false},
    { title: 'Name', key: 'name.common', align: 'start', sortable: true },
    { title: 'AltSpellings', key: 'altSpellings' ,sortable: false},
    { title: 'Idd', key: 'idd' ,sortable: false}
]);

</script>


<style>
.v-data-table th {
    color: blue;
    background-color: #f3f3f3;
    font-weight: bold;
}
</style>
