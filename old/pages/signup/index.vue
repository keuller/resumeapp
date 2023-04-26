<script setup lang="ts">
    import { Register } from '~/types';

    const confirmPassword = ref<string>('');
    const state = reactive<Register>({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    const formSend = async () => {
        if (state.password !== confirmPassword.value) {
            alert('Confirm your password!');
            return;
        }

        if(state.firstName === '') {
            alert('First name field is required');
            return;
        }

        if(state.email === '') {
            alert('E-mail field is required');
            return;
        }

        if(state.password === '') {
            alert('Password field is required');
            return;
        }

        const res = await fetch('/api/people', {
            method: 'POST',
            body: JSON.stringify(state)
        });

        if (res.status === 201) {
            const outcome = await res.json();
            console.log(outcome);
        } else {
            alert('Failed to create an account, try again later.')
        }
    }
</script>

<template>
    <section id="signup" class="relative flex flex-grow justify-center px-3 py-6">

        <div class="bg-white p-6 rounded-md shadow-md w-full lg:w-[460px] lg:absolute lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[50%]">
            <h2 class="text-2xl font-bold mb-2">Sign Up</h2>

            <form id="registerForm" class="grid grid-cols-1 lg:grid-cols-2 gap-y-2 lg:gap-x-3"
                @submit.prevent="formSend">
                <div class="flex flex-col">
                    <label for="firstName"
                        class="text-sm text-slate-500 tracking-wide mt-1 after:content-['*'] after:ml-0.5 after:text-red-500">First Name</label>
                    <input id="firstName" type="text" maxlength="30"
                        class="border rounded text-base font-medium tracking-wider py-2 pl-3"
                        v-model="state.firstName" />
                </div>

                <div class="flex flex-col">
                    <label for="lastName"
                        class="text-sm text-slate-500 tracking-wide mt-1">Last Name</label>
                    <input id="lastName" type="text" maxlength="30"
                        class="border rounded text-base font-medium tracking-wider py-2 pl-3"
                        v-model="state.lastName"/>
                </div>

                <div class="flex flex-col lg:col-span-2">
                    <label for="email"
                        class="text-sm text-slate-500 tracking-wide mt-1 after:content-['*'] after:ml-0.5 after:text-red-500">E-mail</label>
                    <input id="email" type="email" maxlength="100"
                        class="border rounded text-base font-medium tracking-wider py-2 pl-3"
                        v-model="state.email" />
                </div>

                <div class="flex flex-col lg:col-span-2">
                    <label for="password"
                        class="text-sm text-slate-500 tracking-wide mt-1 after:content-['*'] after:ml-0.5 after:text-red-500">Password</label>
                    <input id="password" type="password" maxlength="30"
                        class="border rounded text-base font-medium tracking-wider py-2 pl-3"
                        v-model="state.password"/>
                </div>

                <div class="flex flex-col lg:col-span-2">
                    <label for="confPass"
                        class="text-sm text-slate-500 tracking-wide mt-1 after:content-['*'] after:ml-0.5 after:text-red-500">Confirm Password</label>
                    <input id="confPass" type="password" maxlength="30"
                        class="border rounded text-base font-medium tracking-wider py-2 pl-3"
                        v-model="confirmPassword" />
                </div>

                <div class="flex lg:col-span-2 mt-4">
                    <button type="submit"
                        class="w-full bg-white transition duration-150 ease-in-out hover:bg-gray-100 hover:text-indigo-600 rounded border border-indigo-700 text-indigo-700 px-6 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700">Create account</button>
                </div>
            </form>
        </div>

    </section>
</template>
