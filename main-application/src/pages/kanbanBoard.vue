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
               {{ element.name }}
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
               {{ element.name }}
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
               v-for="element in arrDone"
               :key="element.name"
             >
               {{ element.name }}
             </div>
           </draggable>
         </div>
       </div>
     </div>
   </div>
</template>

<script>
import draggable from "vuedraggable";

export default {
  name: 'kanbanBoard.vue',
 components: {
    draggable
 },
 data () {
  return {
    addTask: "",
    backlogArray: [
       {name : " g" },
       {name : "g " },
       {name : " g" },
       {name : "g " },
    ],

    arrTodo: [],
    arrDoing: [],
    arrDone: []
    };
    },
    methods: {
    add : function(){
    if(this.addTask) {
    this.backlogArray.push( {name: this.addTask});
    this.addTask = "";
    }
}
}
}
</script>

<style>

.kanbanColumn {
  min-height: 400px;
}

</style>

