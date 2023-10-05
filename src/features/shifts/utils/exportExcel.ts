import * as XLSX from 'xlsx';

const exportExcel = (inputData: Array<string[]>, fileName: string) => {
  // 컬럼의 순서를 명시적으로 지정
  const headers = ['id', 'name'];
  const data: string[] = inputData[0];
  const otherHeaders = Object.keys(data).filter(
    (key) => !headers.includes(key)
  );
  const allHeaders = [...headers, ...otherHeaders];

  // 워크시트를 생성하고 컬럼의 폭을 설정
  const ws = XLSX.utils.json_to_sheet(inputData, { header: allHeaders });
  // 엑셀의 workbook(엑셀파일에 지정된 이름)을 만든다
  const wb = XLSX.utils.book_new();
  // workbook에 워크시트 추가, 시트명은 '근무표'
  XLSX.utils.book_append_sheet(wb, ws, '근무표');
  // 엑셀 파일을 내보낸다. 엑셀 파일 저장명은 'fileName.xlsx'
  XLSX.writeFile(wb, `${fileName}.xlsx`);
};

export default exportExcel;
