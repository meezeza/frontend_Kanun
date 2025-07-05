<template>
  <div class="todo-list-container">
    <h1>สิ่งที่ต้องทำในปี 2025</h1>

    <div class="input-section">
      <input 
        type="text" 
        v-model="newTask" 
        placeholder="เพิ่มสิ่งที่ต้องทำใหม่..."
        @keyup.enter="addTask" 
        class="task-input"
      >
      <button @click="addTask" class="add-button">เพิ่ม Task</button>
    </div>

    <ul class="task-list">
      <li v-for="(task, index) in tasks" :key="index" class="task-item">
        <span class="task-text">{{ task }}</span>
        <button @click="deleteTask(index)" class="delete-button">ลบ</button>
      </li>
    </ul>

    <p v-if="tasks.length === 0" class="no-tasks">ยังไม่มีสิ่งที่ต้องทำในรายการ</p>
  </div>
</template>

<script>
export default {
  name: 'TodoList',
  data() {
    return {
      newTask: '',
      tasks: []
    };
  },
  methods: {
    addTask() {
      if (this.newTask.trim() !== '') {
        this.tasks.push(this.newTask.trim()); 
        this.newTask = '';
      } else {
        alert('กรุณาป้อนสิ่งที่ต้องทำ'); 
      }
    },
    deleteTask(index) {
      this.tasks.splice(index, 1);
    }
  }
};
</script>

<style scoped>
/* นำเข้า Google Fonts - ตัวอย่างถ้าต้องการใช้ฟอนต์ Poppins */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

.todo-list-container {
  max-width: 600px;
  margin: 40px auto;
  padding: 30px;
  background-color: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  font-family: 'Poppins', sans-serif;
  text-align: center;
}



.input-section {
  display: flex;
  gap: 15px; /* ระยะห่างระหว่าง input และ button */
  margin-bottom: 30px;
}

.task-input {
  flex-grow: 1; /* ทำให้ input ขยายเต็มพื้นที่ที่เหลือ */
  padding: 12px 18px;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-size: 1.1em;
  outline: none; /* ลบ outline เมื่อ focus */
  transition: border-color 0.3s ease;
}

.task-input:focus {
  border-color: #6a0dad; /* สีม่วงเมื่อ focus */
}

.add-button {
  background: linear-gradient(145deg, #f135b3, #4158d0);
  color: white;
  padding: 12px 25px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1.1em;
  font-weight: 600;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.add-button:hover {
  background-color: #530094; /* สีม่วงเข้มขึ้นเมื่อ hover */
  transform: translateY(-2px); /* เอฟเฟกต์เล็กน้อยเมื่อ hover */
}

.task-list {
  list-style: none; /* ลบหัวข้อจุด/ตัวเลข */
  padding: 0;
  margin: 0;
}

.task-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 15px 20px;
  margin-bottom: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease;
}

.task-item:hover {
  transform: translateY(-3px); /* เอฟเฟกต์เมื่อ hover */
}

.task-text {
  font-size: 1.1em;
  color: #444;
  flex-grow: 1;
  text-align: left;
}

.delete-button {
  background-color: #dc3545; /* สีแดง */
  color: white;
  padding: 8px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9em;
  transition: background-color 0.3s ease;
}

.delete-button:hover {
  background-color: #c82333; /* สีแดงเข้มขึ้นเมื่อ hover */
}

.no-tasks {
  color: #888;
  margin-top: 20px;
  font-style: italic;
  font-size: 1em;
}

</style>