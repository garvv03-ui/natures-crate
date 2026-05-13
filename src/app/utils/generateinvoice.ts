import jsPDF from "jspdf";

interface InvoiceItem {
  name: string;
  quantity: number;
  price: number;
}

interface InvoiceData {
  orderId: number;
  total: number;
  items: InvoiceItem[];
}

export const generateInvoice = ({
  orderId,
  total,
  items,
}: InvoiceData) => {

  const doc = new jsPDF();

  /* Header */
  doc.setFontSize(24);

  doc.text(
    "Nature's Crate",
    20,
    20
  );

  doc.setFontSize(14);

  doc.text(
    "Fresh Vegetable Invoice",
    20,
    30
  );

  /* Order Info */
  doc.setFontSize(12);

  doc.text(
    `Order ID: ${orderId}`,
    20,
    50
  );

  doc.text(
    `Date: ${new Date().toLocaleDateString()}`,
    20,
    60
  );

  /* Table Header */
  doc.setFontSize(14);

  doc.text(
    "Items",
    20,
    90
  );

  doc.text(
    "Qty",
    110,
    90
  );

  doc.text(
    "Price",
    150,
    90
  );

  let y = 110;

  items.forEach((item) => {

    doc.setFontSize(12);

    doc.text(
      item.name,
      20,
      y
    );

    doc.text(
      String(item.quantity),
      110,
      y
    );

    doc.text(
      `₹${item.price}`,
      150,
      y
    );

    y += 20;
  });

  /* Total */
  doc.setFontSize(18);

  doc.text(
    `Total: ₹${total}`,
    20,
    y + 20
  );

  /* Footer */
  doc.setFontSize(12);

  doc.text(
    "Thank you for shopping with Nature's Crate!",
    20,
    y + 50
  );

  doc.save(
    `invoice-${orderId}.pdf`
  );
};