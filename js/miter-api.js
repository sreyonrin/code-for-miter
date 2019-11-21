$(document).ready(function () {
    var url = "https://pixabay.com/api/?key=14001068-da63091f2a2cb98e1d7cc1d82&q=red+flowers&image_type=photo&pretty=true";
    $.ajax({
        url: url,
        dataType: 'json',
        success: function (data) {
            var result = "";
            data.hits.forEach(element => {
                result += `
                    <div class="col-6">

                    <div class="card shadow-lg mt-4">
                    <div class="card-header">
                        <img src="${element.userImageURL}" class="rounded-circle" height="40" width="40">
                        ${element.user}
                        <button type="button" class="btn btn-primary float-right" data-toggle="modal" data-target="#myModal${element.id}">
                        view
                      </button>
                    </div>
                    <div class="card-header">
                        <img src="${element.largeImageURL}" class="img-fluid">                          
                    </div>
                    <!-- The Modal -->
                    <div class="modal fade" id="myModal${element.id}">
                    <div class="modal-dialog">
                    <div class="modal-content">
                    
                        <!-- Modal Header -->
                        <div class="modal-header">
                        <img src="${element.largeImageURL}" class="rounded-circle" height="40" width="40">
                        ${element.user}
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>
                        
                        <!-- Modal body -->
                        <div class="modal-body">
                        <img src="${element.largeImageURL}" class="img-fluid"> 

                    <ul class="list-group list-group-horizontal">
                        <li class="list-group-item"><i class="material-icons text-primary float-right">thumb_up</i>&nbsp;${element.likes}</li>
                        <li class="list-group-item"><i class="material-icons text-success float-right">comments</i>&nbsp;${element.comments}</li>
                        <li class="list-group-item"><i class="material-icons text-danger float-right">favorites</i>&nbsp;${element.favorites}</li>
                        <li class="list-group-item"><i class="material-icons text-info float-right">groups</i>&nbsp;${element.previewWidth}</li>        
                    </ul>

                        </div>                                                      
                    </div>
                    </div>
                    </div>
                </div>
            </div>
                `;
            });
            $('#result').append(result);
        }
    });
});