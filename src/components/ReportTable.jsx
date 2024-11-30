"use client";

import fileDownload from "js-file-download";
import jsPDF from "jspdf";
import React from "react";
import "jspdf-autotable";

const convertToCSV = (data) => {
  const header = Object.keys(data[0]).join(",") + "\n";
  const rows = data.map((row) => Object.values(row).join(",")).join("\n");
  return header + rows;
};

const convertToPDF = (data) => {
  
  const doc = new jsPDF({ orientation: "landscape" }); 
  doc.setFontSize(16); 
  doc.text("আ’মলি মুহাসাবা", 14, 10); 
  const headers = [["আ’মলি মুহাসাবা", ...Array.from({ length: 30 }, (_, i) => (i + 1).toString())]];
  const rows = data.map((row) => [row.name, ...row.data]);
  const pageWidth = doc.internal.pageSize.getWidth();
  const tableWidth = pageWidth - 20;
  doc.autoTable({
    head: headers,
    body: rows,
    startY: 20,
    theme: "grid", 
    headStyles: {
      fillColor: [22, 160, 133], 
      textColor: [255, 255, 255], 
      fontSize: 10,
      halign: 'center', 
      valign: 'middle', 
    },
    bodyStyles: {
      fontSize: 10, 
      cellPadding: 3, 
      halign: 'center', 
      valign: 'middle', 
      borderColor: [200, 200, 200], 
      lineWidth: 0.5,
    },
    alternateRowStyles: {
      fillColor: [240, 240, 240], 
    },
    columnStyles: {
      0: { cellWidth: 50 }, 
      
      1: { cellWidth: (tableWidth - 50) / 30 },
      2: { cellWidth: (tableWidth - 50) / 30 },
      3: { cellWidth: (tableWidth - 50) / 30 },
      4: { cellWidth: (tableWidth - 50) / 30 },
      5: { cellWidth: (tableWidth - 50) / 30 },
      6: { cellWidth: (tableWidth - 50) / 30 },
      7: { cellWidth: (tableWidth - 50) / 30 },
      8: { cellWidth: (tableWidth - 50) / 30 },
      9: { cellWidth: (tableWidth - 50) / 30 },
      10: { cellWidth: (tableWidth - 50) / 30 },
      11: { cellWidth: (tableWidth - 50) / 30 },
      12: { cellWidth: (tableWidth - 50) / 30 },
      13: { cellWidth: (tableWidth - 50) / 30 },
      14: { cellWidth: (tableWidth - 50) / 30 },
      15: { cellWidth: (tableWidth - 50) / 30 },
      16: { cellWidth: (tableWidth - 50) / 30 },
      17: { cellWidth: (tableWidth - 50) / 30 },
      18: { cellWidth: (tableWidth - 50) / 30 },
      19: { cellWidth: (tableWidth - 50) / 30 },
      20: { cellWidth: (tableWidth - 50) / 30 },
      21: { cellWidth: (tableWidth - 50) / 30 },
      22: { cellWidth: (tableWidth - 50) / 30 },
      23: { cellWidth: (tableWidth - 50) / 30 },
      24: { cellWidth: (tableWidth - 50) / 30 },
      25: { cellWidth: (tableWidth - 50) / 30 },
      26: { cellWidth: (tableWidth - 50) / 30 },
      27: { cellWidth: (tableWidth - 50) / 30 },
      28: { cellWidth: (tableWidth - 50) / 30 },
      29: { cellWidth: (tableWidth - 50) / 30 },
      30: { cellWidth: (tableWidth - 50) / 30 },
    },
    pageBreak: 'auto', 
  });

  return doc;
};



const ReportTable = () => {
  const handleDownloadCSV = () => {
    const csv = convertToCSV(rows);
    fileDownload(csv, "table-data.csv");
  };

  const handleDownloadPDF = () => {
    const pdf = convertToPDF(rows);
    pdf.save("table-data.pdf");
  };

  const days = Array.from({ length: 30 }, (_, i) => ` ${i + 1}`);
  const rows = [
    {
      id: 1,
      name: "তাহাজ্জুদ",
      data: Array(30).fill(0),
    },
    { id: 2, name: "সকাল-সন্ধ্যা দোয়া ও জিকির", data: Array(30).fill(0) },
    { id: 3, name: "জামাতে সালাত", data: Array(30).fill(0) },
    {
      id: 4,
      name: "দু’আ আনাস ইবনে মালেক",
      data: Array(30).fill(0),
    },
    { id: 5, name: "তিন তাসবীহ (সকাল- সন্ধ্যা)", data: Array(30).fill(0) },
    { id: 6, name: "দৈনিক হিজবুল বাহার পাঠ", data: Array(30).fill(0) },
    { id: 7, name: "তিলাওয়াতুল কোরয়আন তাদাব্বুর", data: Array(30).fill(0) },
    { id: 8, name: "ইশরাক-আওয়াবীন-চাশ্ত", data: Array(30).fill(0) },
    { id: 9, name: "সিরাত ও মাগফিরাত কিতাব পাঠ", data: Array(30).fill(0) },
    { id: 10, name: "ইলমী ও আমলী কিতাব পাঠ", data: Array(30).fill(0) },
    { id: 11, name: "দা’য়ীদের আমলী কিতাব পাঠ", data: Array(30).fill(0) },
    {
      id: 12,
      name: "আজ সোমবার আইয়্যামে বীজের রোজা রেখেছেন তো?",
      data: Array(30).fill(0),
    },
  ];

  return (
    <div className="overflow-x-auto pt-4 grow">
      <table className="table-auto border-collapse border border-gray-300 w-full text-xl">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2">আ’মলি মুহাসাবা</th>
            {days.map((day, index) => (
              <th
                key={index}
                className="border border-gray-300 p-2 text-center"
              >
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              <td className="border border-gray-300 p-2 font-medium text-left">
                {row.name}
              </td>
              {row.data.map((value, index) => (
                <td
                  key={index}
                  className="border border-gray-300 p-2 text-center"
                >
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-4 flex justify-end gap-4">
        <button
          className="p-2 text-white bg-teal-700 border-2 border-teal-700 rounded-md hover:bg-teal-800"
          onClick={handleDownloadCSV}
        >
          Download CSV
        </button>
        <button
          className="p-2 text-white bg-teal-700 border-2 border-teal-700 rounded-md hover:bg-teal-800"
          onClick={handleDownloadPDF}
        >
          Download PDF
        </button>
      </div>
    </div>
  );
};

export default ReportTable;