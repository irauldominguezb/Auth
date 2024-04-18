<template>
    <div class="container">
        <div>
            <b-row>
                <b-col cols="12" class="mt-3">
                    <b-card class=" bg-white custom-card">
                            <b-row>
                                <b-col cols="12">
                                    <b-img :src="user.picture" rounded="circle"></b-img>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col cols="12" class="mt-3">
                                    <h4>{{ user.name }}</h4>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col>
                                    <p class="text-secondary" style="font-size: medium;">{{ user.email }}</p>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col>
                                    <b-button class="bg-primary" style="border: none;" @click="onSingOut()">
                                        <b-icon icon="power"></b-icon>
                                        Cerrar sesión
                                    </b-button>
                                </b-col>
                            </b-row>
                    </b-card>
                </b-col>
            </b-row>
        </div>
    </div>
</template>

<script>
import {auth} from '@/config/firebase-config'
import {signOut} from "firebase/auth";
export default {
    name: "Profile",
    data() {
        return {
            user: {
                name: '',
                picture: '',
                email: '',
                verified_email: false
            }
        }
    },
    methods: {
        getUserInfo(){
            if(!(localStorage.getItem('user'))){
                this.$router.push({ name: 'auth' });
            }
            this.user = JSON.parse(localStorage.getItem('user'));
        },
        onSingOut(){
            signOut(auth).then(() => {
                localStorage.removeItem('token');
                localStorage.removeItem('user');
                this.$router.push({ name: 'auth' });
            }).catch((err) => {
                console.log("Error =>", err);
            });
        }
    },
    mounted(){
        this.getUserInfo();
    }
}
</script>

<style scoped>

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vh;
}

.custom-card{
    width: 400px;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: center;
}
</style>