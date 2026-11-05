# KOREAJOB24 Google Sheets Form Integration Guide

Follow these steps to link the employer application form on the website directly to your Google Spreadsheet.

---

## Step 1. Create a Google Spreadsheet
1. Open [Google Sheets](https://sheets.google.com) and create a new blank spreadsheet.
2. Rename the sheet tab at the bottom to **`Submissions`** (or keep the default name, but make sure the code matches).
3. Set up the header row in row 1 with the following columns:
   - **Column A**: `Company Name`
   - **Column B**: `Workers Needed`
   - **Column C**: `Contact Person`
   - **Column D**: `Phone Number`
   - **Column E**: `Email Address`
   - **Column F**: `Job Details`
   - **Column G**: `Submitted At`

---

## Step 2. Create the Google Apps Script
1. In your spreadsheet, click on **Extensions** -> **Apps Script** in the top menu.
2. Delete any default code in the editor and paste the following Google Apps Script code:

```javascript
function doPost(e) {
  try {
    // Parse the incoming JSON payload
    var data = JSON.parse(e.postData.contents);
    
    // Open the active spreadsheet and select the 'Submissions' sheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Submissions");
    if (!sheet) {
      sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0]; // Fallback to first sheet
    }
    
    // Append the form data as a new row
    sheet.appendRow([
      data.companyName,
      data.workersCount,
      data.contactPerson,
      data.contactPhone,
      data.contactEmail,
      data.jobDescription,
      data.submittedAt
    ]);
    
    // Return a success JSON response
    return ContentService.createTextOutput(JSON.stringify({ "result": "success" }))
                         .setMimeType(ContentService.MimeType.JSON);
                         
  } catch (error) {
    // Return an error JSON response
    return ContentService.createTextOutput(JSON.stringify({ "result": "error", "message": error.toString() }))
                         .setMimeType(ContentService.MimeType.JSON);
  }
}
```

3. Click the **Save** disk icon (or press `Cmd + S` / `Ctrl + S`).

---

## Step 3. Deploy the Script as a Web App
1. In the Apps Script editor, click the **Deploy** button in the top-right corner, then select **New deployment**.
2. Click the gear icon next to "Select type" and choose **Web app**.
3. Fill out the configuration:
   - **Description**: `koreajob24 employer submissions`
   - **Execute as**: `Me (your-gmail-account@gmail.com)`
   - **Who has access**: **`Anyone`** *(CRITICAL: Must select 'Anyone' so the website can submit requests without authorization)*.
4. Click **Deploy**.
5. You may be asked to click "Authorize access" to give the script permission to write to your Google Sheets. Click authorize and follow the prompts.
6. Once deployed, copy the **Web app URL** (it looks like `https://script.google.com/macros/s/AKfycb.../exec`).

---

## Step 4. Add the URL to script.js
1. Open the [script.js](file:///Users/a1710/.gemini/antigravity/scratch/koreajob24/script.js) file.
2. Locate line 118:
   ```javascript
   const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbx0q6oPzD5d6HwA92Q99J3g7yT-9z_lXb8c7v_YOUR_ID/exec';
   ```
3. Replace the placeholder URL with your copied **Web app URL**.
4. Save the file.

Now, whenever an employer submits the form on the website, their request will immediately appear in your Google Sheet!
