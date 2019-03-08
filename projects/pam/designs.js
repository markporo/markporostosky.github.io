//select color input
//select size input
var height, width, color;

//when size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function(e) {
    e.preventDefault();
    height = $('#inputHeight').val();
    width = $('#inputWeight').val();
    makeGrid(height, width);
    //console.log('Height: ' + height + ' Width: ' + width);
})

function makeGrid(x, y) {
    $('tr').remove();

    //makeGrid code:
    for (let i = 1; i <= x; i++) {
        $('#pixelCanvas').append('<tr id=table' + i + '></tr>')

        for (let j = 1; j <= y; j++) {
            $('#table' + i).append('<td></td>')
        }
    }

    //Add Color to Grid:
    $('td').click(function addColor() {
        let color = $('#colorPicker').val();

        if ($(this).attr('style')) {
            $(this).removeAttr('style')
            $(this).attr('style', 'background-color:' + color)
        } else {
            $(this).attr('style', 'background-color:' + color)
        }



    })
}