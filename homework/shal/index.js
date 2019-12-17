function shipping() {
console.log('checkout/shipping_method');
 $.ajax({
        url: 'index.php?route=checkout/shipping_method',
        dataType: 'html',
        success: function(html) {
            $('.ship-pay').html(html);	
			
			payment();			
        },
        error: function(xhr, ajaxOptions, thrownError) {
            alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
        }
    });	
}