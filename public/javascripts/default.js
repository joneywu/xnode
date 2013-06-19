/**
 * Created with JetBrains WebStorm.
 * User: Joney
 * Date: 13-6-19
 * Time: 下午8:57
 * To change this template use File | Settings | File Templates.
 */

function ajaxTest() {
    $('#enter').click(function () {
        //function showMe(){
        alert('go');
        $.ajax({
            url: '/action', type: 'POST', cache: false, data: { field1: 1, field2: 2 }, complete: function () {
                //called when complete
                console.log('process complete');
            },

            success: function (data) {
                alert(data);
                console.log('process sucess: ' + JSON.stringify(data));
            },

            error: function () {
                console.log('process error');
            }
        });


    });

}
