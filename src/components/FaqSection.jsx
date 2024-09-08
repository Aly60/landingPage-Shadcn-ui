import { Accordion, AccordionItem } from "@nextui-org/react";

const FaqSection = () => {
  const steps = [
    {
      question: "كيف يتم الدخول على العقد المراد عمل محضر استلام نهائي له؟",
      answer:
        "يقوم صاحب الصلاحية (مدير النظام/الوكالة/البلدية) بالدخول على العقد المراد عمل محضر استلام نهائي له.",
    },
    {
      question: "كيف يمكن الوصول إلى الإجراءات المتاحة لتنفيذها؟",
      answer:
        "يقوم صاحب الصلاحية (مدير النظام/الوكالة/البلدية) بالدخول على الإجراءات المتاح تنفيذها.",
    },
    {
      question: "كيف يتم إضافة محضر استلام نهائي لعقد؟",
      answer:
        "يقوم صاحب الصلاحية (مدير النظام/الوكالة/البلدية) بالضغط على إضافة محضر استلام نهائي لعقد.",
    },
    {
      question: "كيف يتم اعتماد محضر الاستلام النهائي؟",
      answer:
        "يقوم صاحب الصلاحية (مدير النظام/الوكالة/البلدية) باعتماد محضر الاستلام النهائي.",
    },
    {
      question: "ماذا يحدث بعد اعتماد محضر الاستلام النهائي؟",
      answer:
        "تتحول حالة العقد من تم الاستلام الابتدائي إلى تم الاستلام النهائي.",
    },
  ];

  return (
    <div className="p-8 max-w-4xl mx-auto bg-white rounded-xl shadow-lg">
      <h2 className="text-4xl font-semibold text-center text-gray-800 mb-8">
        الأسئلة الشائعة
      </h2>
      <Accordion
        variant="bordered"
        className="space-y-4"
        css={{
          ".nextui-accordion-item-header": {
            background: "#f8f9fa",
            padding: "1rem 1.5rem",
            fontWeight: "500",
            fontSize: "1.125rem",
            color: "#333",
            borderBottom: "1px solid #eaeaea",
          },
          ".nextui-accordion-item-body": {
            padding: "1rem 1.5rem",
            fontSize: "1rem",
            lineHeight: "1.75",
            color: "#555",
          },
          ".nextui-accordion-item": {
            border: "1px solid #eaeaea",
            borderRadius: "0.5rem",
            overflow: "hidden",
            transition: "all 0.3s ease",
          },
          ".nextui-accordion-item:hover": {
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          },
        }}
      >
        {steps.map((step, index) => (
          <AccordionItem
            key={index}
            title={step.question}
            className="transition-transform"
          >
            <div>{step.answer}</div>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
export default FaqSection;
