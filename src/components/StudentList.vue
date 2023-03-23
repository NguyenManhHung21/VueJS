<template lang="">
    <div>
        <table class='mx-auto max-w-4xl w-full whitespace-nowrap rounded-lg bg-white divide-y divide-gray-300 overflow-hidden'>
            <thead class="bg-gray-900 box-border">
                <tr class="text-white  py-10">
                    <th class="font-semibold text-sm uppercase w-44 box-border">
                        <button v-show="hasSelected" @click="handleDelChecked" class=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-28 h-6 text-center box-border">Xoá tất cả</button>
                    </th>
                    <th class="font-semibold text-sm uppercase px-6 py-4 ">Mã SV </th>
                    <th class="font-semibold text-sm uppercase px-6 py-4  text-center">Tên SV</th>
                    <th class="font-semibold text-sm uppercase px-6 py-4 ">Ngày sinh</th>
                    <th class="font-semibold text-sm uppercase px-6 py-4 ">Giới tính</th>
                    <th class="font-semibold text-sm uppercase px-6 py-4 ">Khoa</th>
                    <th class="font-semibold text-sm uppercase px-6 py-4  text-center">Hành động</th>
                </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
                <tr v-for="(student, index) in myStudents" :key="index">
                    <td class="text-center px-6 py-4">
                        <input :checked="selectedStudent.findIndex(select => select.id === student.id) !== -1"  @change="selectedStd(student)" id="link-checkbox" type="checkbox" value="" class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 ">
                    </td>
                    <td>
                        
                        <div class="flex items-center space-x-3">
                            <p class="px-6 py-4">{{student.id}}</p>
                        </div>
                    </td>
                    <td class="px-6 py-4 flex items-center">
                        <div class="inline-flex w-10 h-10 mr-2"> <img class='w-10 h-10 object-cover rounded-full' alt='User avatar' src='https://i.imgur.com/siKnZP2.jpg' /> </div>
                        <div>
                            <p>{{student.name}}</p>
                        </div>
                    </td>
                    <td class="px-6 py-4">
                        {{student.birthday}}
                    </td>
                    <td class="px-6 py-4">{{student.gender}}</td>
                    <td class="px-6 py-4">{{student.faculty}}</td>
                    <td class="px-6 py-4">
                       
                        <router-link to="/addsv">
                            <button @click="handleEdit(student)" class="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 mt-4 sm:mt-0 inline-flex items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded">
                                <p class="text-sm font-medium leading-none text-white">Sửa</p>
                            </button>
                        </router-link>
                        <button class="ml-3 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 mt-4 sm:mt-0 inline-flex items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded">
                            <p @click="handleDel(index)" class="text-sm font-medium leading-none text-white">Xoá</p>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import { toast } from 'vue3-toastify';
export default {
    name: 'StudentList',
    props: {
        isShowModal: Boolean
    },
    data() {
        return {
            hiddenT: false,
            value: '',
            hasSelected: false,
            selectedStudent: [],
            myStudents: []
        }
    },
    methods: {
        handleDel(index) {

            this.myStudents.splice(index, 1);
            console.log(index);
            localStorage.setItem('students', JSON.stringify(this.myStudents));
        },
        handleEdit(student) {
            this.$emit('edit', student)
        },
        handleAdd(student) {
            this.myStudents.push(student);
            localStorage.setItem('students', JSON.stringify(this.myStudents));
        },
        handleUpdate(student) {
            const index = this.myStudents.findIndex((item) => item.id === student.id)
            this.myStudents.splice(index, 1, student)
            localStorage.setItem('students', JSON.stringify(this.myStudents));
        },
        selectedStd(student) {
            if (this.selectedStudent.includes(student)) {
                this.selectedStudent = this.selectedStudent.filter(std => std !== student)
            } else this.selectedStudent.push(student)
            if (this.selectedStudent.length > 0) {
                this.hasSelected = true;
            } else this.hasSelected = false;
        },
        handleDelChecked() {
            this.hasSelected = false;
            this.myStudents = this.myStudents.filter(std => !this.selectedStudent.includes(std));
            localStorage.setItem('students', JSON.stringify(this.myStudents));
        },
        searchStd(search) {
            if (search == '') {
                toast.warning('Bạn chưa nhập gì!!');
                this.myStudents = JSON.parse(localStorage.getItem('students'));
            }
            else {
                this.myStudents = this.myStudents.filter(std => std.name.toLowerCase().includes(search.toLowerCase()));
            }


        }

    },
    created() {
        this.myStudents = localStorage.getItem('students') ? JSON.parse(localStorage.getItem('students')) : [];

    },

}
</script>
<style ></style>