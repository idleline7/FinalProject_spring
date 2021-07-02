//리스트
$(function(){
	
	$("#categoryOption").val($('#categorySelected').val()).prop("selected", true);
	
	$.ajax({
		
		type: 'post',
		url: '/jaju/managerSaleboard/getManagerSaleboardList',
		data: {'pg': $('#pg').val(), 'sale_category' : $('#categoryOption').val()},
		dataType: 'json',
		success: function(data){
			//alert(JSON.stringify(data));
			  $.each(data.list, function(index, items){
		            $('<tr/>').append($('<td/>', {
		            	align: "center"
		            }).append($('<input/>', {
		            	type: 'checkbox',
		            	name: 'check',
		            	value: items.sale_seq
		            }))).append($('<td/>',{
		               align:'center',
		               text: items.sale_seq
		               
		            })).append($('<td/>',{
			               
		               }).append($('<a/>',{
		            	   style: "cursor:pointer;",
			               text: items.sale_subject,
			               id: 'item',
		                  
		               })) 
		            ).append($('<td/>',{
		               align:'center',
		               text: items.member_id
		               
		            })).append($('<td/>',{
		               align:'center',
		               text: items.sale_date
		               
		            })).append($('<td/>',{
		               align:'center',
		               text: items.sale_hit
		               
		            })).appendTo($('#managerSaleboardTable'));
	
			}); //each
			  
			  $(document).on('click', '#item', function(){

		               var seq = $(this).parent().prev().text();
		               location.href = '/jaju/manager/managerSaleboardView?board_seq='+seq+'&pg=1';

		         });

			  //페이징 처리
			$('#pagingArea').html(data.saleboardPaging.pagingHTML);		   
		}, 
			error:function(err){
			console.log(err);
			alert('error');
		}
	});
});

$('#categoryOption').change(function(){
	
	//alert($('#categoryOption').val())
	
	if($('#keyword').val() == ''){
		$.ajax({
			
			type: 'post',
			url: '/jaju/managerSaleboard/getManagerSaleboardList',
			data: {'pg': '1', 'sale_category' : $('#categoryOption').val()},
			dataType: 'json',
			success: function(data){
				//alert(JSON.stringify(data));
				$('#managerSaleboardTable tr:gt(0)').remove();
				  $.each(data.list, function(index, items){					  
					  
			            $('<tr/>').append($('<td/>', {
			            	align: "center"
			            }).append($('<input/>', {
			            	type: 'checkbox',
			            	name: 'check',
			            	value: items.sale_seq
			            }))).append($('<td/>',{
			               align:'center',
			               text: items.sale_seq
			               
			            })).append($('<td/>',{
				               
			               }).append($('<a/>',{
			            	   style: "cursor:pointer;",
				               text: items.sale_subject,
				               id: 'item',
			                  
			               })) 
			            ).append($('<td/>',{
			               align:'center',
			               text: items.member_id
			               
			            })).append($('<td/>',{
			               align:'center',
			               text: items.sale_date
			               
			            })).append($('<td/>',{
			               align:'center',
			               text: items.sale_hit
			               
			            })).appendTo($('#managerSaleboardTable'));
		
				}); //each
				  
				  $(document).on('click', '#item', function(){

			               var seq = $(this).parent().prev().text();
			               location.href = '/jaju/manager/managerSaleboardView?board_seq='+seq+'&pg=1';

			         });

				  //페이징 처리
				$('#pagingArea').html(data.saleboardPaging.pagingHTML);		   
			}, 
				error:function(err){
				console.log(err);
				alert('error');
			}
		});
	} else{
		$.ajax({			
			type: 'post',
			url: '/jaju/managerSaleboard/getManagerSaleboardSearchList',
			data: {'pg': $('#searchPg').val(), 'sale_category' : $('#categoryOption').val(), 'searchOption': $('#searchOption').val(), 'keyword': $('#keyword').val()},
			dataType: 'json',
			success: function(data){
				//alert(JSON.stringify(data));
				$('#managerSaleboardTable tr:gt(0)').remove();
				  $.each(data.list, function(index, items){					  
					  
			            $('<tr/>').append($('<td/>', {
			            	align: "center"
			            }).append($('<input/>', {
			            	type: 'checkbox',
			            	name: 'check',
			            	value: items.sale_seq
			            }))).append($('<td/>',{
			               align:'center',
			               text: items.sale_seq
			               
			            })).append($('<td/>',{
				               
			               }).append($('<a/>',{
			            	   style: "cursor:pointer;",
				               text: items.sale_subject,
				               id: 'item',
			                  
			               })) 
			            ).append($('<td/>',{
			               align:'center',
			               text: items.member_id
			               
			            })).append($('<td/>',{
			               align:'center',
			               text: items.sale_date
			               
			            })).append($('<td/>',{
			               align:'center',
			               text: items.sale_hit
			               
			            })).appendTo($('#managerSaleboardTable'));
		
				}); //each
				  
				  $(document).on('click', '#item', function(){

			               var seq = $(this).parent().prev().text();
			               location.href = '/jaju/manager/managerSaleboardView?board_seq='+seq+'&pg=1';

			         });

				  //페이징 처리
				$('#pagingArea').html(data.saleboardPaging.pagingHTML);		   
			}, 
				error:function(err){
				console.log(err);
				alert('검색 에러');
			}
		});
	}

});


$('#managerBoardSearchBtn').click(function(){
	
	if($('#keyword').val() == ''){
		alert('검색어를 입력해 주세요');
	} else{
		$.ajax({
			
			type: 'post',
			url: '/jaju/managerSaleboard/getManagerSaleboardSearchList',
			data: {'pg': $('#searchPg').val(), 'sale_category' : $('#categoryOption').val(), 'searchOption': $('#searchOption').val(), 'keyword': $('#keyword').val()},
			dataType: 'json',
			success: function(data){
				//alert(JSON.stringify(data));
				$('#managerSaleboardTable tr:gt(0)').remove();
				  $.each(data.list, function(index, items){					  
					  
			            $('<tr/>').append($('<td/>', {
			            	align: "center"
			            }).append($('<input/>', {
			            	type: 'checkbox',
			            	name: 'check',
			            	value: items.sale_seq
			            }))).append($('<td/>',{
			               align:'center',
			               text: items.sale_seq
			               
			            })).append($('<td/>',{
				               
			               }).append($('<a/>',{
			            	   style: "cursor:pointer;",
				               text: items.sale_subject,
				               id: 'item',
			                  
			               })) 
			            ).append($('<td/>',{
			               align:'center',
			               text: items.member_id
			               
			            })).append($('<td/>',{
			               align:'center',
			               text: items.sale_date
			               
			            })).append($('<td/>',{
			               align:'center',
			               text: items.sale_hit
			               
			            })).appendTo($('#managerSaleboardTable'));
		
				}); //each
				  
				  $(document).on('click', '#item', function(){

			               var seq = $(this).parent().prev().text();
			               location.href = '/jaju/manager/managerSaleboardView?board_seq='+seq+'&pg=1';

			         });

				  //페이징 처리
				$('#pagingArea').html(data.saleboardPaging.pagingHTML);		   
			}, 
				error:function(err){
				console.log(err);
				alert('검색 에러');
			}
		});
		
	}
	
});

$('#choiceDeleteBtn').click(function(){
	$.ajax({
		type: 'post',
		url: '/jaju/managerSaleboard/managerSaleboardListDelete',
		data: $('#managerSaleboardListDelete').serialize(),
		success: function(){
			
			location.href = '/jaju/managerSaleboard/managerSaleboardList?pg=1&sale_category=*';
			
		}, error: function(err){
			console.log(err);
			alert('판매 게시글 삭제 에러');
		}
	});
});

