//managerMember.js 에서 일어나는 일 : 회원정보 가져오기(아이디+이메일,가입일, 게시글 수, 판매내역수, 구매내역수)

//선택한 회원 --> 활동중지, 강제탈퇴

//닉네임, 이메일로 검색 
//정렬 --최신순, 이름순, 

//신고누적 횟수 5이상은 블랙리스트등록

$(function(){
//창이 열리자 마자 , 모든 회원 정보 가져오기. 
	$.ajax({
		url: '/jaju/manager/getManagerMember',
		type:'post',
		dataType:'json',
		data: {'pg': '1', 'sortinSelect': $('#sortinSelect').val()},
				//'pg': $('#pg').val()
		success:function(data){
			$.each(data.list, function(index, items){
				//console.log(JSON.stringify(data));
				$('<tr/>').append($('<td/>',{
					class:'chk',
				}).append($('<input/>',{
					type:"checkbox",
					name:"check",
					id:"check_id"+items.member_seq,
					value:items.member_id,
					class:"checkradio_styled"
				}))).append($('<td/>').append($('<div/>',{
					class:'table_data'
				}).append($('<a/>',{
					href:'#',
					class:'user_info',
					text:items.member_id
				})))).append($('<td/>',{
					class:'member_email',
					text:items.member_email,
					style:'text-align:center;'
				})).append($('<td/>').append($('<div/>',{
					class:'table_data',
					text:'회원',
					style:'text-align:center;'
				}))).append($('<td/>',{
					class:'signin_date_span',
					text:items.member_date,
					style:'text-align:center;'	
				})).append($('<td/>',{
					class:'member_manner_span',
					text:items.member_manner+'℃',
					style:'text-align:center;'					
				})).append($('<td/>',{
					class:'member_warning_span',
					text:items.member_warning	
				})).append($('<td/>',{
					class:'member_sell_span',
					text:'판매리스트 이동'	
				})).appendTo($('#memberListBody'));
				
				// 전체 선택 또는 해제
				$('#all').click(function(){
				   // alter($('#all').attr('checked'));//checked 속성이 없어서 undefind으로 나온다.
				   // alert($('#all').prop('checked'));//attr이 아니라 값으로 가져와야한다.
				   if($('#all').prop('checked')){
				      $('input[name=check]').prop('checked',true);
				   }else {
				      $('input[name=check]').prop('checked',false);
				   }
				});
			});//each
			
			
			
		},error:function(err){
			console.log("관리자-회원 쪽 에러발생"+err);
		}		
	});//ajax
});

/*==활동중지==*/
$('#btnDeactivate').click(function(){
	var checkboxValues = [];
		$("input[name='check']:checked").each(function(i) {
		checkboxValues.push($(this).val());
	 });
	var count = $('input[name=check]:checked').length;
		//유효성검사
		if(count==0){
			alert("삭제할 항목을 선택 하세요");
		}
		else {
			if(confirm(checkboxValues+"의 아이디를 활동 중지로 변경 하시겠습니까?")){
				$("#managerMemberForm").attr("action", "/jaju/manager/changeMemberState");
				$('#managerMemberForm').submit();
				alert('변경이 완료 되었습니다.');
				//location.reload();
			}else{
				alert('변경에 실패했습니다. 다시 선택해주세요.');
			}
		}
});

/*==강제탈퇴==*/
$('#btnWithdraw').click(function(){
		var checkboxValues = [];
		$("input[name='check']:checked").each(function(i) {
		checkboxValues.push($(this).val());
		});
		var count = $('input[name=check]:checked').length;
		//유효성검사
		if(count==0){
			alert("삭제할 항목을 선택 하세요");
		}
		else {
			if(confirm(checkboxValues+"의 아이디를 삭제 하시겠습니까?")){
				$("#managerMemberForm").attr("action", "/jaju/manager/deleteMemberId");
				$('#managerMemberForm').submit();
				alert('삭제 완료 되었습니다.');
				//location.reload();
			}else{
				alert('삭제에 실패했습니다. 다시 선택해주세요.');
			}
		}
});
/*== select list 눌렀을 때 다른 값으로 가져오는 기능 (sort)==*/
$('#sortinSelect').change(function(){
	$('#memberListBody tr').remove();

	$.ajax({
		type: 'post',
		url: '/jaju/manager/getManagerMember',
		data: {'pg': 1, 'sortinSelect': $('#sortinSelect').val()},
		dataType: 'json',
		success: function(data){
			//alert(JSON.stringify(data));
			$('#memberListBody tr').remove();
			
			$.each(data.list, function(index, items){
				//console.log(JSON.stringify(data));
				$('<tr/>').append($('<td/>',{
					class:'chk',
				}).append($('<input/>',{
					type:"checkbox",
					name:"check",
					id:"check_id"+items.member_seq,
					value:items.member_id,
					class:"checkradio_styled"
				}))).append($('<td/>').append($('<div/>',{
					class:'table_data'
				}).append($('<a/>',{
					href:'#',
					class:'user_info',
					text:items.member_id
				})))).append($('<td/>',{
					class:'member_email',
					text:items.member_email,
					style:'text-align:center;'
				})).append($('<td/>').append($('<div/>',{
					class:'table_data',
					text:'회원',
					style:'text-align:center;'
				}))).append($('<td/>',{
					class:'signin_date_span',
					text:items.member_date,
					style:'text-align:center;'	
				})).append($('<td/>',{
					class:'member_manner_span',
					text:items.member_manner+'℃',
					style:'text-align:center;'					
				})).append($('<td/>',{
					class:'member_warning_span',
					text:items.member_warning,
					style:'text-align:center;'
				})).append($('<td/>',{
					class:'member_sell_span',
					text:'판매리스트 이동'	
				})).appendTo($('#memberListBody'));
				
				// 전체 선택 또는 해제
				$('#all').click(function(){
				   // alter($('#all').attr('checked'));//checked 속성이 없어서 undefind으로 나온다.
				   // alert($('#all').prop('checked'));//attr이 아니라 값으로 가져와야한다.
				   if($('#all').prop('checked')){
				      $('input[name=check]').prop('checked',true);
				   }else {
				      $('input[name=check]').prop('checked',false);
				   }
				});
			});//each
			$(document).on('click', '.item', function(){
				if($('#memId').val() == ''){
					alert("먼저 로그인 하세요");
				}else {
					var seq = $(this).attr('id');
					location.href = '/jaju/saleboard/saleboardView?sale_seq='+seq+'&pg=1';
				}
			});
			
			//$('#pagingDiv').html(data.saleboardPaging.pagingHTML);
			
		}, error: function(err){
			console.log(err);
			alert('리스트 생성 오류');
			
		}
	});//ajax
});

/*==검색==*/
$('#search-text_Btn').click(function(){
	if($('#search-text').val() == ""){
		alert("검색어를 입력해 주세요");
		$('#search-text').focus();
	}else{
		$.ajax({
			type: 'post',
			url: '/jaju/manager/getSearchMemberInfo',
			data: {
				'pg': $('#pg').val(), 
				'searchMode': $('#searchMode').val(), //==sortinSelect
				'search-text' : $('#search-text').val(), //==searchText
				'sortinSelect': $('#sortinSelect').val()},
			dataType: 'json',
			success: function(data){
				//alert(JSON.stringify(data));
				$('#memberListBody tr').remove();
				
				$.each(data.list, function(index,items){
					$('<tr/>').append($('<td/>',{
						class:'chk',
					}).append($('<input/>',{
						type:"checkbox",
						name:"check",
						id:"check_id"+items.member_seq,
						value:items.member_id,
						class:"checkradio_styled"
					}))).append($('<td/>').append($('<div/>',{
						class:'table_data'
					}).append($('<a/>',{
						href:'#',
						class:'user_info',
						text:items.member_id
					})))).append($('<td/>',{
						class:'member_email',
						text:items.member_email,
						style:'text-align:center;'
					})).append($('<td/>').append($('<div/>',{
						class:'table_data',
						text:'회원',
						style:'text-align:center;'
					}))).append($('<td/>',{
						class:'signin_date_span',
						text:items.member_date,
						style:'text-align:center;'	
					})).append($('<td/>',{
						class:'member_manner_span',
						text:items.member_manner+'℃',
						style:'text-align:center;'					
					})).append($('<td/>',{
						class:'member_warning_span',
						text:items.member_warning,
						style:'text-align:center;'
					})).append($('<td/>',{
						class:'member_sell_span',
						text:'판매리스트 이동'	
					})).appendTo($('#memberListBody'));	
					
				}); //each

				//$('#pagingDiv').html(data.saleboardPaging.pagingHTML);
				
				//if(str != 'research'){$('#searchPg').val(1);}
				
			}, error: function(err){
				console.log(err);
				alert('검색 리스트 생성 오류');
				
			}
		});
	} 
});

//가입일 최신순, 오래된 순, 매너온도 순


//활동중지 눌렀을 경우--> 상태를 1로 변경? default : 0 .그리고 신고 누적횟수 update.
/*
$('#btnDeactivate').click(function(){
	//console.log($('input[name=check]:checked').val());
	 var checkboxValues = [];
	    $("input[name='check']:checked").each(function(i) {
	        checkboxValues.push($(this).val());
    	});
	 var allData = { "array": checkboxValues };
	    
	    alert("allData : "+allData +"   /    "+"checkboxValues : "+checkboxValues)
	    
        if(confirm('선택한 아이디가 '+'[ '+checkboxValues+' ]'+' 이 맞습니까?')){
        	console.log('휴 성공');
	        	var obj = $("[name=check]");
	        	var check = new Array(); // 배열 선언
	        	$('input:checkbox[name=check]:checked').each(function () { // 체크된 체크박스의 value 값을 가지고 온다.
	        		check.push(this.value);
	        	});
	        	var allData = { "array": check };
	        	
	        	 //alert("managerMember.check value"+checkboxValues);

	        	 //jQuery.ajaxSettings.traditional = true;

	       	 	 //ajax 호출. mapper -> update  
		      	  	
	        	$.ajax({
		          	url: "/jaju/manager/breakMemberState",
		          	dataType: "json",
		          	type: "post",
		          	data: allData,
		          	success: function () {
		            	alert("성공")
		          	},
		          	error: function (request, status, error) {
		            	alert("실패")
		          	}
	      	  	});//ajax
					$('#').submit();
					alert('선택된 아이디의 활동 중지가 완료 되었습니다.');
        }else{
			alert('활동중지에 실패했습니다. 다시 선택해주세요.');
		}
        
});
*/

/*
$("#check_id"+items.member_seq).click(function(){
	alert('1');
	$("input[name=check]:checked").each(function(){
	var checkboxValues = [];
        checkboxValues.push($(this).val());
        
        $('#input_checked_id_span').append($(this).val());
        
        var tempHtml ='<span>'+$(this).val()+'<span/>';
	});
});*/


/*var arTest = [];
$("input[name=check]:checked").each(function(){
    // name이 같은 체크박스의 값들을 배열에 담는다.
    var checkboxValues = [];
    $("input[name='check']:checked").each(function(i) {
        checkboxValues.push($(this).val());
        console.log(checkboxValues);
    });
    
});
*/




/*
$('#btnGetChilds').click(function () {  
    var childCheckBoxes = $("ul.check ul li input[type='checkbox']");
    
    var values = "";
    
    for(i=0; i< childCheckBoxes.length; i++)
    {
        values += childCheckBoxes[i].value + "\n";
    }    
    
    alert(values);
});*/