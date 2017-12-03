<template>
<div class="panel-group">
  <div class="panel panel-default">
    <div class="panel-heading" id="heading-title">Done</div>
    <div class="panel-body " v-for="(task, index) in tasks" :key="index">
      <div class="panel-group">
        <div class="panel panel-default">
          <div class="panel-heading">{{task.title}}</div>
          <div class="panel-body text-left">
            Point : {{task.point}} <br> Description : {{task.description}} Assigned to : {{task.assignedto}}
            <div>
              <a @click="showDetail(task)" href="#" data-toggle="modal" data-target="#detailDone" class="btn btn-primary" role="button">Show Detail</a>
            </div>
            <div id="detailDone" class="modal fade" role="dialog">
              <div class="modal-dialog text-left">

                <!-- Modal content-->
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h5 class="modal-title"> Detail Task : {{taskDetail.title}}</h5>
                  </div>
                  <div class="modal-body ">
                    <form>
                      <div class="form-group">
                        <h5>Description :</h5>
                        {{taskDetail.description}}
                      </div>
                      <div class="form-group">
                        <h5>Point :</h5>
                        {{taskDetail.point}}
                      </div>
                      <div class="form-group">
                        <h5>Assign to :</h5>
                        {{taskDetail.assignedto}}
                      </div>
                      <div class="form-group">
                          <h5>Status :</h5>
                         Done
                        </div>
                       
          
                    <a type="submit" data-toggle="modal" data-target="#delete-task-done" class="btn btn-danger" role="button">Delete</a>
                    <div id="delete-task-done" class="modal fade" role="dialog">
                      <div class="modal-dialog modal-xs text-left">
                        <div class="modal-content">

                          <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                            <h5 class="modal-title"> Are you sure you want to delete?</h5>
                          </div>

                          <div class="modal-body">
                            <a href="#" class="btn btn-danger" role="button" data-dismiss="modal" @click="deleteTask">Yes</a>
                            <a href="#" class="btn btn-info" role="button" data-dismiss="modal">Cancel</a>

                          </div>

                        </div>
                      </div>
                    </div>
                      <button type="submit" class="btn btn-info" data-dismiss="modal" @click="move">Doing</button>
                       
                    </form>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>

</div>
</template>


<script>
import db from '@/firebase/firebase'
export default {
  props: ['tasks'],
  name: 'BackLog',
  data () {
    return {
      taskDetail: {
        title: '',
        description: '',
        point: '',
        assignedto: '',
        key: ''
      }
    }
  },
  methods: {
    showDetail (task) {
      this.taskDetail.title = task.title
      this.taskDetail.description = task.description
      this.taskDetail.point = task.point
      this.taskDetail.assignedto = task.assignedto
      this.taskDetail.key = task['.key']
    },
    deleteTask () {
      db.ref(`/done/${this.taskDetail.key}`).remove()
    },
    move () {
      const newTask = {
        title: this.taskDetail.title,
        description: this.taskDetail.description,
        point: this.taskDetail.point,
        assignedto: this.taskDetail.assignedto
      }
      db.ref(`/doing`).push(newTask)
      this.deleteTask()
    }
  }
}
</script>


<style scoped>
.form-group {
  padding: 5px;
}
#heading-title {
  background-color: #3ed670;
  color: white;
}
</style>