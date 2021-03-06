package inquire.dao;

import java.util.List;
import java.util.Map;

import inquire.bean.InquireDTO;

public interface InquireDAO {

	public void inquireWrite(InquireDTO inquireDTO);

	public List<InquireDTO> getInquireList(Map<String, String> map);

	public InquireDTO getInquireView(String seq);

	public InquireDTO getInquireModify(String seq);

	public void inquireModify(InquireDTO inquireDTO);

	public int getTotalA();
	
	public int getIdTotalA(String inquiry_id);

	public void inquireDelete(String seq);

	public void inquireReply(Map<String, String> map);

}