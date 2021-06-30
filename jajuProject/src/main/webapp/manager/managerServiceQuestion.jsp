<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="/jaju/manager_css/managerServiceQuestion.css" />
</head>
<body>

<div class="total" style="display:flex; justify-content: center;">
<jsp:include page="/manager/managerMenu.jsp"/>
<div id="content" class="cont_post post_spam">
	<div class="wrap_tit">
		<h3 class="cont_tit">
			<span class="tit_menu">자주묻는질문 관리</span>
		</h3>
		
		<div class="box_search">
			<div class="select_admin" style="font-size: 14px;">
			<select id="itemcd" name="itemcd">
				<option value="managerService">&nbsp;&nbsp;&nbsp;&nbsp;제목&nbsp;&nbsp;&nbsp;&nbsp;</option>
				<option value="managerService">&nbsp;&nbsp;&nbsp;&nbsp;카테고리&nbsp;&nbsp;&nbsp;&nbsp;</option>
			</select>
			</div>
			
			<div class="search_input">
				<input id="search-text" maxlength="20" size="25" class="tf_search textbox_default" title="검색어">
				<button type="button" class="btn_admin btn_search button-search">
					<span class="ico_admin">검색</span>
				</button>
			</div>
		</div>
	</div>
	<div class="option_list article_option_list">
		
	</div>

	<div class="set_list" id="listControlBar" style="width: 840px; height: 50px; background: #FAFAFA; border-top: 1px solid #e4e4e4; border-bottom: 1px solid #e4e4e4;">
		<div class="bundle_set">
		
		</div>
		<div class="bundle_set" style="align: right;">
			<button type="button" class="btn_admin btn_type2 button-delete-article">
				<span class="ico_admin ico_del"></span>
				<span class="txt_btn">삭제</span>
			</button>
		</div>
	</div>

	<div id="admin_listview">
		<table class="tbl_admin">

		
			<thead>
			<tr>
				<th class="" style="width:40px;"><input type="checkbox" id="all" onclick="checkAll()"></th>
               <th class="board_seq" style="width:80px;">번호</th>
               <th class="board_hit" style="width:150px;">카테고리</th>
               <th class="board_subject" style="width:564px;">제목</th>
			</tr> 
			</thead>
		<tr>
			   <td align="center"><input type="checkbox"></td>
               <td align="center">번호</td>
               <td align="center">카테고리</td>
               <td>제목</td>
			</tr>
	
	</table>
</div>

<div id="pagingAreaPg" class="page_admin"></div>

		<div id="pagingArea" class="page_admin">
			
				<a class="btn_page btn_prev page_disabled" style="height: 20px;">
					<span class="ico_admin"></span>&nbsp;이전
				</a>
				
				<ul class="bundle_page"><li class="on"><a>1</a></li></ul>
				
				<a class="btn_page btn_next page_disabled">다음&nbsp;
					<span class="ico_admin"></span>
				</a>
			</div>
		<div id="article-summary-layer" class="layer_post summary-layer"></div>
	</div>
</div>
</body>
<script type = "text/javascript" src = "http://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="/jaju/manager_js/managerServiceNotice.js"></script>
<script type="text/javascript">
$(document).ready(function(){
	
	$('#managerServiceQuestion').addClass('on');
});
</script>

<script type="text/javascript">
//전체 선택 또는 해제
$('#all').click(function(){
	//alert($('#all').attr('checked')); // - checked 속성이 없어서 undefind으로 나온다.
	//alert($('#all').prop('checked')); //true 또는 false
	
	if($('#all').prop('checked')){
		$('input[name=check]').prop('checked', true);
	}else{
		$('input[name=check]').prop('checked', false);
		
	}
});
</script>
</html>