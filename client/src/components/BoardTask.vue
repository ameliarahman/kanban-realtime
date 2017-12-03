<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <add-task> </add-task>
    <div class="row">
        <div class="col-md-3"> 
          <back-log :tasks="backlog" title="Backlog"> </back-log>
        </div>

        <div class="col-md-3"> 
            <todo :tasks="todo"  title="Todo"> </todo>
        </div>

        <div class="col-md-3"> 
            <doing :tasks="doing" title="Doing"> </doing>
        </div>

        <div class="col-md-3"> 
            <done :tasks="done" title="Done"> </done>
        </div>
      
  </div>
</div>
</template>

<script>
import AddTask from '@/components/AddTask'
import BackLog from '@/components/BackLog'
import Todo from '@/components/Todo'
import Doing from '@/components/Doing'
import Done from '@/components/Done'
import db from '@/firebase/firebase'

export default {
  name: 'BoardTask',
  data () {
    return {
      msg: 'Welcome to Kanban Board'
    }
  },
  components: {
    AddTask,
    BackLog,
    Todo,
    Doing,
    Done
  },
  firebase: {
    backlog: db.ref('/backlog'),
    todo: db.ref('/todo'),
    doing: db.ref('/doing'),
    done: db.ref('/done')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
.row{
  margin : 30px 10px;
}

</style>
