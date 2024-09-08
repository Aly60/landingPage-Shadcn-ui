import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import { motion } from "framer-motion";

const SystemCards = () => {
  const sections = [
    {
      title: "دخول من أي مكان",
      text: "ليس هنـــاك حاجـــة للتقيد داخـــل المكاتـــب المغلقـــة، يمكـــن اســـتخدام النظام مـــن أي مـــكان بالعالم وفي اي وقت ",
    },
    {
      title: "لوحة متابعة وتقارير",
      text: "يقـــدم النظـــام إحصائيـــات المـــشروع وتقاريـــر محدثـــة لحظيـــا تغطـــي بشـــكل واف تقـــدم المـــشروع ســـواء في الانجـــاز التنفيـــذي أو المـــالي.",
    },
    {
      title: "مركزية كاملة",
      text: "الاســـتفادة مـــن خصائـــص الانترنـــت الشـــبكي واجـــراء التحديثـــات بشـــكل مركـــزي بـــدون الحاجـــة للتعامـــل مـــع اجهـــزة المستخدمين.",
    },
    {
      title: "نمذجة معلومات البناء",
      text: "أي ســـكوب يســـتخدم احـــدث التقنيـــات العالميـــة في نمذجـــة معلومـــات البنـــاء خـــال رســـومات ثلاثية الابعـــاد لتوضيح المشروع.",
    },
  ];

  return (
    <section id="SystemCards">
      <div className="p-6">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold mb-4">كيف صمم اي سكوب؟</h2>
          <p className="text-lg max-w-2xl mx-auto">
            يعتمــد نظــام أي ســكوب عــلى ثلاثــة معاييــر لتقديم حــل ناجح
            لإدارة وثائــق المشروعــات بــدءا مــن تأمـيـن الوثائــق ثــم تنظيم
            الوصــول لهــا (إدارة الصلاحيــات) ثــم المرونــة في ادخــال أي
            نــوع مــن المعلومــات المفهرســة مــن خــلال واجهــة ســهلة
            الاســتعمال لضمــان نجــاح اســتثمارك في النظــام
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.2 }}
            >
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="font-bold text-xl">
                  {section.title}
                </CardHeader>
                <CardBody>{section.text}</CardBody>
                <CardFooter>
                  {/* You can add buttons or links in the footer if necessary */}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SystemCards;
