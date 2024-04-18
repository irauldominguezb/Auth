<template>
    <div>
        <div class="container">
            <b-card class="shadow-lg">
                <b-card-body>
                    <div class="d-flex justify-content-between">
                        <b-button 
                            class="bg-primary d-flex align-items-center"
                            style="border: none; margin-right: 10px;"
                            @click="signInWithGoogle()"
                            v-b-tooltip.hover.bottom="'Click to signin with Google!'"
                        >
                            <b-icon icon="google"/>
                            <small class="ps-2" style="font-size: 19px;">Sign in with Google</small>
                        </b-button>
                    </div>
                </b-card-body>
            </b-card>
        </div>
    </div>
</template>

<script>
import { auth, googleProvider } from '@/config/firebase-config';
import {signInWithPopup,getAdditionalUserInfo} from "firebase/auth";
import Profile from '../user/Profile.vue';
export default {
    name: 'Auth',
    data() {
        return {
            user: null
        }
    },
    components: {
        Profile
    },
    methods: {
        signInWithGoogle(){
            signInWithPopup(auth, googleProvider).then((res) => {
                const {user: { stsTokenManager: { accessToken } } } = res
                localStorage.setItem('token', accessToken);
                localStorage.setItem('user', JSON.stringify(getAdditionalUserInfo(res).profile));
                this.$router.push({ name: 'profile' });
            }).catch((err) => {
                console.log("Error");
            });
        }
    }
}
</script>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
</style>