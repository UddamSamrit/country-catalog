<template>
    <div>
        <v-dialog max-width="800" hight="100%" class="flex items-stretch">
                            <template v-slot:activator="{ props: activatorProps }">
                                <v-btn v-bind="activatorProps" :text="item.name.common" variant="flat"></v-btn>
                            </template>

                            <template v-slot:default="{ isActive }">
                                <v-card title="">
                                    <div>
                                        <div class="px-4 sm:px-0">
                                            <h3 class="text-base font-semibold leading-7 text-gray-900">
                                                {{ item.name.common }}</h3>
                                            <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
                                                {{ item.name.official }}</p>
                                        </div>
                                        <div class="mt-6 border-t border-gray-100">
                                            <dl class="divide-y divide-gray-100">
                                                <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                                    <dt class="text-sm font-medium leading-6 text-gray-900">Flag
                                                    </dt>
                                                    <dd
                                                        class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                                        <v-img :width="300" aspect-ratio="16/9" cover
                                                            :src="item.flags.png"></v-img>
                                                    </dd>
                                                </div>
                                                <div v-if="item.flags.alt"
                                                    class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                                    <dt class="text-sm font-medium leading-6 text-gray-900">Alt
                                                    </dt>
                                                    <dd
                                                        class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                                        <p>{{ item.flags.alt }}</p>
                                                    </dd>
                                                </div>
                                                <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                                    <dt class="text-sm font-medium leading-6 text-gray-900">Spelling
                                                    </dt>
                                                    <dd
                                                        class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                                        <v-chip v-for="spelling in item.altSpellings" :key="spelling"
                                                            class="ma-2" color="green" outlined>
                                                            {{ spelling }}
                                                        </v-chip>
                                                    </dd>
                                                </div>
                                                <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                                    <dt class="text-sm font-medium leading-6 text-gray-900">Maps</dt>
                                                    <dd
                                                        class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                                        <p>
                                                            <a :href="item.maps.googleMaps" target="_blank">
                                                                View on Google Maps
                                                            </a>
                                                        </p>

                                                        <p>
                                                            <a :href="item.maps.openStreetMaps" target="_blank">
                                                                View on OpenStreetMap
                                                            </a>
                                                        </p>
                                                    </dd>
                                                </div>
                                                <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                                    <dt class="text-sm font-medium leading-6 text-gray-900">Region</dt>
                                                    <dd
                                                        class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                                        {{ item.region }}</dd>
                                                </div>
                                                <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                                    <dt class="text-sm font-medium leading-6 text-gray-900">Timezones
                                                    </dt>
                                                    <dd
                                                        class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                                        <v-chip v-for="timezone in item.timezones" :key="timezone"
                                                            class="ma-2" color="green" outlined>
                                                            {{ timezone }}
                                                        </v-chip>
                                                    </dd>
                                                </div>
                                                <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                                    <dt class="text-sm font-medium leading-6 text-gray-900">Cca2
                                                    </dt>
                                                    <dd
                                                        class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                                        {{ item.cca2 }}
                                                    </dd>
                                                </div>
                                                <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                                    <dt class="text-sm font-medium leading-6 text-gray-900">Cca3
                                                    </dt>
                                                    <dd
                                                        class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                                        {{ item.cca3 }}
                                                    </dd>
                                                </div>
                                                <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                                    <dt class="text-sm font-medium leading-6 text-gray-900">Capital
                                                    </dt>
                                                    <dd
                                                        class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                                        <v-chip v-for="capital in item.capital" :key="capital"
                                                            class="ma-2" color="green" outlined>
                                                            {{ capital }}
                                                        </v-chip>
                                                    </dd>
                                                </div>

                                            </dl>
                                        </div>
                                    </div>

                                </v-card>
                            </template>
                        </v-dialog>
    </div>
</template>

<script setup>
    const { item } = defineProps(['item']);
</script>

<style lang="scss" scoped>

</style>