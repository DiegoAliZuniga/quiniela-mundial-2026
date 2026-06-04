function pruebaCrearPestanasQuiniela() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  if (!ss) throw new Error("Abre este script desde la hoja: Extensiones > Apps Script.");

  const names = ["Diagnostico", "Resultados", "Ranking", "Estado API"];
  names.forEach(function(name) {
    const sheet = ss.getSheetByName(name) || ss.insertSheet(name);
    sheet.clearContents();
    sheet.getRange(1, 1, 4, 2).setValues([
      ["Campo", "Valor"],
      ["Fecha", new Date()],
      ["Spreadsheet ID", ss.getId()],
      ["Spreadsheet URL", ss.getUrl()],
    ]);
    sheet.autoResizeColumns(1, 2);
  });

  return {
    ok: true,
    spreadsheetId: ss.getId(),
    spreadsheetUrl: ss.getUrl(),
    sheets: ss.getSheets().map(function(sheet) {
      return sheet.getName();
    }),
  };
}
