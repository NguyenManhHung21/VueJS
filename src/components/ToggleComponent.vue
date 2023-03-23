<template>
    <div class="flex justify-center mb-10">
        <button @click="showModal" type="button"
            class="mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Thêm Sinh viên
        </button>
        <Modal v-if="isShowModal" @close="closeModal">
            <template #header>
                <div class="flex items-center text-2xl font-extrabold ">Thêm sinh viên</div>
            </template>
            <template #body>
                <div>
                    <label class="block mb-2 text-sm font-medium text-gray-900">Mã SV</label>
                    <input :disabled="cantIp" type="text" id="email" v-model="student.id"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="Nhập ID SV" required />
                </div>

                <div class="mt-3">
                    <label class="block mb-2 text-sm font-medium text-gray-900">Tên SV</label>
                    <input type="text" id="email" v-model="student.name"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400"
                        placeholder="Nhập tên SV" required />
                </div>
                <div class="mt-3">
                    <label class="block mb-2 text-sm font-medium text-gray-900">Ngày sinh</label>
                    <input type="date" v-model="student.birthday"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        name="" id="" />
                </div>
                <div class="mt-3">
                    <label class="block mb-2 text-sm font-medium text-gray-900">Giới tính</label>
                    <div class="flex items-center">
                        <input type="radio" name="gender" v-model="student.gender" :checked="student.gender === 'Nam'"
                            value="Nam" id="Male" />&nbsp;
                        <label class=" mr-6" for="Male">Nam</label>
                        <input type="radio" name="gender" v-model="student.gender" :checked="student.gender === 'Nữ'"
                            value="Nữ" id="Female" />&nbsp;
                        <label for="Female">Nữ</label>
                    </div>
                </div>
                <div class="mt-3">
                    <label class="block mb-2 text-sm font-medium text-gray-900">Khoa</label>
                    <select v-model="student.faculty"
                        class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                        <option disabled value="">-- Chọn Khoa --</option>
                        <option value="CNTT">CNTT</option>
                        <option value="KHMT">KHMT</option>
                        <option value="QTKD">QTKD</option>
                        <option value="HTTT">HTTT</option>
                    </select>
                </div>
            </template>
            <template #footer>
                <div class="flex justify-between">
                    <button @click="closeModal" type="button"
                        class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
                        Thoát
                    </button>
                    <button :hidden="showAdd" @click="handleAdd" type="button"
                        class=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Thêm
                    </button>
                    <button :hidden="showUpdate" @click="handleUpdate" type="button"
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Cập nhật
                    </button>
                </div>
            </template>
        </Modal>
    </div>
    <div><student-list ref="child" @edit="handleEdit" :isShowModal="isShowModal" /></div>
</template>

<script>
import StudentList from './StudentList.vue';
import { Modal } from 'flowbite-vue'
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
export default {
    name: 'ToggleComponent',
    components: {
        StudentList,
        Modal
    },
    data() {
        return {
            cantIp: false,
            showUpdate: true,
            showAdd: false,
            isShowModal: false,
            student: {
                id: '',
                name: '',
                birthday: '',
                gender: '',
                faculty: '',
            },
        }
    },
    methods: {
        closeModal() {
            this.isShowModal = false
        },
        showModal() {
            this.cantIp = false;
            this.isShowModal = true
        },

        handleAdd() {

            if (!this.student.id || !this.student.name || !this.student.birthday || !this.student.gender || !this.student.faculty) {
                toast.warning('Đề nghị thêm các trường còn trống!!', { autoClose: 1000 })
                return;
            }
            if (this.student.id && this.student.name && this.student.birthday && this.student.gender && this.student.faculty) {
                this.$refs.child.handleAdd({ ...this.student });
                this.student.id = '';
                this.student.name = '';
                this.student.birthday = '';
                this.student.gender = '';
                this.student.faculty = '';
            }
            toast.success('Thêm thành công!!', { autoClose: 2000 })
        },
        handleEdit(studentEdit) {
            this.isShowModal = true;
            this.cantIp = true;
            this.showUpdate = false;
            this.showAdd = true;
            this.student.id = studentEdit.id;
            this.student.name = studentEdit.name;
            this.student.birthday = studentEdit.birthday;
            this.student.gender = studentEdit.gender;
            this.student.faculty = studentEdit.faculty;
        },
        handleUpdate() {
            this.isShowModal = false;
            this.$refs.child.handleUpdate(this.student);
        }
    },
}
</script>
<style lang="">
</style>
