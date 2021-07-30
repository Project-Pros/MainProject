<template>
  <div class="container mt-4">
    <div class="col-3">
      <div class="p-2 alert alert-dark">
        <h3>Add Task</h3>
        <b-form-input
            id="input-2"
            v-model="addTitle"
            required
            placeholder="Add New Task Title"
        ></b-form-input>
        <b-form-input
            id="input-2"
            v-model="addDescription"
            required
            placeholder="Add New Task Description"
        ></b-form-input>
        <datepicker v-model="dueDate"></datepicker>
        <b-button id="addButton" @click="add">Add</b-button>
      </div>
    </div>

    <div class="row mt-4">
      <div class="col-3">
        <div class="p-2 alert alert-light">
          <h3>Back Log List</h3>
          <draggable
              class="list-group kanbanColumn"
              :list="arrBackLog"
              group="tasks"
          >
            <div
                class="list-group-item"
                v-for="element in arrBackLog"
                :key="element.name"
            >
              Task: {{ element.name }} <br/>
              Description: {{ element.description }}
              Due Date: {{element.dueDate}}
            </div>
          </draggable>
        </div>
      </div>

      <div class="col-3">
        <div class="p-2 alert alert-success">
          <h3>To Do</h3>

          <draggable
              class="list-group kanbanColumn"
              :list="arrTodo"
              group="tasks"
          >
            <div
                class="list-group-item"
                v-for="element in arrTodo"
                :key="element.name"
            >
              Task: {{ element.name }} <br/>
              Description: {{ element.description }}
              Due Date: {{element.dueDate}}

            </div>
          </draggable>
        </div>
      </div>

      <div class="col-3">
        <div class="p-2 alert alert-danger">
          <h3>Doing</h3>

          <draggable
              class="list-group kanbanColumn"
              :list="arrDoing"
              group="tasks"
          >
            <div
                class="list-group-item"
                v-for="element in arrDoing"
                :key="element.name"
            >
              Task: {{ element.name }} <br/>
              Description: {{ element.description }}
              Due Date: {{element.dueDate}}

            </div>
          </draggable>
        </div>
      </div>

      <div class="col-3">
        <div class="p-2 alert alert-dark">
          <h3>Done</h3>

          <draggable
              class="list-group kanbanColumn"
              :list="arrDone"
              group="tasks"
          >
            <div
                class="list-group-item"
                v-for="(element, index) in arrDone"
                :key="index"
            >
              Task: {{ element.name }} <br/>
              Description: {{ element.description }}
              Due Date: {{element.dueDate}}

              <b-button @click="deleteTask(index)">Delete</b-button>

            </div>
          </draggable>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import {mapMutations, mapGetters, mapState} from 'vuex';
import Datepicker from 'vuejs-datepicker';


export default {
  name: 'kanbanBoard.vue',
  components: {
    draggable,
    Datepicker
  },
  data () {
    return {
      addTitle: '',
      addDescription: '',
      dueDate: ''
    };
  },
  computed: {
    ...mapState(['arrBackLog', 'arrTodo', 'arrDoing', 'arrDone'])
  },
  methods: {
    ...mapMutations(['setBacklog', 'setTodo', 'setDoing', 'setDone']),
    ...mapGetters(['getBacklog', 'getTodo', 'getDoing', 'getDone']),
    add() {
      if (this.addTitle) {
        this.arrBackLog.push({name: this.addTitle, description: this.addDescription, dueDate: this.dueDate});
        this.setBacklog(this.arrBackLog);
        this.addTitle = '';
        this.addDescription = '';
      }
    },
    deleteTask(index){
      this.arrDone = this.arrDone.slice(0,index)
      this.arrDone = this.arrDone.slice(index+1)
      this.setDone(this.arrDone);
    }
  }
}
</script>

<style>

.kanbanColumn {
  min-height: 400px;
}
#input-2 {
  max-width: 500px;
  margin-bottom: 10px;
}
#addButton {
  margin-top: 10px;
}
</style>

