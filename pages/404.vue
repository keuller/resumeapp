<script setup>
    import astronautImg from '~/assets/astronaut.svg';
</script>

<template>
    <main id="error_page" class="grid grid-rows-2 lg:grid-cols-2 lg:mt-40">
        <section id="picture" class="bg-transparent flex justify-center lg:justify-end">
            <img :src="astronautImg" alt="astronaut" class="w-96"/>
        </section>

        <section id="text" class="bg-transparent">
            <div class="p-4 lg:px-12">
                <h1 class="font-bold my-4 text-5xl">404</h1>
                <h2 class="font-bold my-2 text-2xl">Oops! Are you lost?</h2>
                <p class="text-base leading-6 tracking-wider">The page you are looking for does not exist.
                <br/>But you can click the button below to go back to the home page.
                </p>
                <div class="flex justify-center lg:justify-start">
                    <button class="mt-6 bg-transparent transition duration-150 ease-in-out border border-indigo-700 hover:bg-gray-100 rounded text-indigo-700 px-8 py-3 text-xs focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700"
                    @click.prevent="() => navigateTo('/')">HOME</button>
                </div>
            </div>
        </section>
    </main>

</template>
