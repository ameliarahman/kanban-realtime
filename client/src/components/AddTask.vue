<template>
  <div id="newTask">
    <a href="#" data-toggle="modal" data-target="#addTask" class="btn btn-primary" role="button">Create New Task</a>

    <div id="addTask" class="modal fade" role="dialog">
      <div class="modal-dialog">

        <!-- Modal content-->
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">Add New Task</h4>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                Tittle :
                <input type="text" class="form-control" id="title" v-model="task.title" placeholder="Enter title" required>
              </div>
              <div class="form-group">
               Description :
                 <textarea class="form-control" rows="3" v-model="task.description" placeholder="Enter description" required></textarea>
              </div>
              <div class="form-group">
                Point :
                <input type="number" class="form-control" v-model="task.point" id="point" placeholder="Enter number" required>
              </div>
              <div class="form-group">
                Assign to :
                <input type="text" class="form-control" id="assignedto" v-model="task.assignedto" placeholder="Enter assign to" required>
              </div>
              
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            <button type="submit" class="btn btn-default" data-dismiss="modal" @click="addItem">Submit</button>
            </form>
          </div>
        </div>

      </div>
    </div>
  </div>

</template>

<script>
  import db from '@/firebase/firebase'
  export default {
    name: 'AddTask',
    data () {
      return {
        task: {
          title: '',
          description: '',
          point: null,
          assignedto: ''
        }
      }
    },
    firebase: {
      tasks: db.ref('/backlog')
    },
    methods: {
      addItem: function () {
        db.ref('/backlog').push(this.task)
        alert('Successfully added 1 task!')
        this.task.title = ''
        this.task.description = ''
        this.task.point = null
        this.task.assignedto = ''
      }
    }
  }
</script>

<style>
textarea{
  height : 50%;
}
</style>