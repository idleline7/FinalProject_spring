<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="/jaju/manager_css/managerBoard.css" />
</head>
<body>
<div style="width: 1080px; margin: auto;">
<jsp:include page="/manager/managerMenu.jsp"/>
<div id="content" class="cont_post post_spam">
      <div class="wrap_tit">
         <h3 class="cont_tit">
            <span class="tit_menu">자유게시판 관리</span>
         </h3>
         <form name = "managerFreeboardSearchList" id="managerFreeboardSearchList">
         <div class="box_search">
            <div class="select_admin">
               <select id="search-mode" fixedsize="100" title="검색 조건 선택" class="selectbox_styled">
                  <option value="board_subject">제목</option>
                  <option value="board_content">내용</option>
                  <option value="board_id">작성자</option>
               </select>
               <a id="search-mode_img" class="img_selectbox" tabindex="0" style="width: 70px;">제목</a>
            </div>
            <div class="search_input">
               <input id="search-text" maxlength="20" size="25" class="tf_search textbox_default" title="검색어">
               <button type="button" class="btn_admin btn_search button-search">
                  <span class="ico_admin">검색</span>
               </button>
            </div>
         </div>
         <input type="hidden" name="pg" id="pg" value="${param.pg }">
         <input type="hidden" name="searchPg" id="searchPg" value="1">   
         </form>
      </div>
      <div class="option_list article_option_list">
         <div class="info_option">
            <span class="txt_total">전체 게시글 <span id="totalNum" class="num_total"></span></span>
         </div>
      </div>

      <div class="set_list" id="listControlBar" style="width:840px">
         <div class="bundle_set">
            <div class="txt_choice">
               <div class="check_admin check-all">
                  <input type="checkbox" id="inpCheckAll" class="checkradio_styled">
               </div>
            </div>
         </div>
         <div class="bundle_set">
            <button type="button" class="btn_admin btn_type2 button-delete-article">
               <span class="ico_admin ico_del"></span>
               <span class="txt_btn">삭제</span>
            </button>
         </div>
      </div>

      <div id="admin_listview">
         <table id="managerFreeboardTable" class="tbl_admin" summary="게시글 목록입니다. 제목, 글쓴이, 작성일, 조회수를 제공합니다.">
            <caption class="ir_caption">게시글 관리 목록</caption>
            <colgroup>
               <col width="48px">
               <col width="150px" class="fldname">
               <col width="100%" class="title">
               <col width="140px" class="writer">
               <col width="100px">
               <col width="90px">
            </colgroup>
            <thead>
            <tr>
               <th scope="col" class=""><input type="checkbox"></th>
               <th scope="col" class="board_seq">글번호</th>
               <th scope="col" class="board_subject">제목</th>
               <th scope="col" class="board_id">글쓴이</th>
               <th scope="col" class="logtime">작성일</th>
               <th scope="col" class="board_hit">조회수</th>
            </tr>
            </thead>
            <tbody id="article-list">
</tbody>
         </table>
      </div>
      


<!-- 페이징 -->

      <div id="article-summary-layer" class="layer_post summary-layer"></div>
      <div id="pagingAreaPg" class="page_admin"></div>
   </div>
</div>



<script type="text/javascript" src="http://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="/jaju/manager_js/managerFreeboardList.js"></script>

</body>
</html>