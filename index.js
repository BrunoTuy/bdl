import XLSX from 'xlsx';
import path from 'path';

const excelFilePath = path.join('smartcaixa.xlsx');

try {
  // Read the workbook
  const workbook = XLSX.readFile(excelFilePath);

  // Get the first sheet name (or specify a different one)
  const sheetName = workbook.SheetNames[0];

  // Get the worksheet
  const worksheet = workbook.Sheets[sheetName];

  // Convert the worksheet data to JSON
  const data = XLSX.utils.sheet_to_json(worksheet);

  // Log the extracted data
  console.log(data);

} catch (error) {
  console.error('Error reading Excel file:', error);
}