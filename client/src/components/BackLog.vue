<template>
  <div class="panel-group">
    <div class="panel panel-default">
      <div class="panel-heading">Back Log</div>
      <div class="panel-body">
        <div class="panel-group">
          <div class="panel panel-default">
            <div class="panel-heading">hoamm</div>
            <div class="panel-body">
              Hoams
              <div>
                <a href="#" data-toggle="modal" data-target="#detailBackLog" class="btn btn-primary" role="button">Show Detail</a>
              </div>
              <div id="detailBackLog" class="modal fade" role="dialog">
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
                            <input type="text" class="form-control" id="title" placeholder="Enter title" required>
                          </div>
                          <div class="form-group">
                           Description :
                             <textarea class="form-control" rows="3" placeholder="Enter description" required></textarea>
                          </div>
                          <div class="form-group">
                            Point :
                            <input type="number" class="form-control" id="point" placeholder="Enter number" required>
                          </div>
                          <div class="form-group">
                            Assign to :
                            <input type="text" class="form-control" id="assignedto" placeholder="Enter assign to" required>
                          </div>
                          
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                        <button type="submit" class="btn btn-default">Submit</button>
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
  export default {
    props: ['taskTitle'],
    name: 'BackLog'
  }
</script>


<style>

</style>