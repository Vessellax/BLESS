// ─────────────────────────────────────────────────────────
// BLESS Waitlist — Google Apps Script
//
// HOW TO SET UP:
//   1. Create a new Google Sheet and rename the first tab "Waitlist"
//   2. In the sheet: Extensions > Apps Script
//   3. Delete any existing code, paste this entire file
//   4. Click Save, then Deploy > New deployment
//      - Type: Web app
//      - Execute as: Me
//      - Who has access: Anyone
//   5. Click Deploy, authorize when prompted
//   6. Copy the deployment URL
//   7. Paste it into index.html where it says PASTE_YOUR_APPS_SCRIPT_URL_HERE
// ─────────────────────────────────────────────────────────

function doPost(e) {
  const ss    = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName('Waitlist') || ss.getActiveSheet();

  // Write header row on first signup
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Timestamp', 'First Name', 'Last Name', 'Email']);
    sheet.getRange(1, 1, 1, 4).setFontWeight('bold');
  }

  const data = JSON.parse(e.postData.contents);
  sheet.appendRow([new Date(data.timestamp), data.first_name, data.last_name, data.email]);

  return ContentService
    .createTextOutput(JSON.stringify({ success: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
