// src/components/SystemProps.jsx

const SystemProps = () => {
  const sections = [
    {
      title: "تعزيز دقة انجاز المشاريع",
      text: "يقــدم النظــام آليــات مختلفــة ومتنوعــة في رصــد نســب إنجــاز المشروعــات بمــا يتوافــق مــع الآليــات المتبعــة لــكل جهــة منهــا: نسب الانجاز من خلال تقارير نسب الإنجاز من خلال دورة عمل تسليم واستلام البنود بين المقاول والاستشارى نسب انجاز المهام والاعمال التي يتم اعتمادها في الجدول الزمنى للمشروع",
      imgSrc: "../assets/features-1.png",
      altText: "Project accuracy enhancement",
    },
    {
      title: "حوكمة كافة المشاريع",
      text: "يقــدم النظــام اطــار منضبــط لإدارة حيــاة المشروعــات ويتيــح دورات عمــل مختلفــة لــكل الاجــراءات الخاصــة بالمشروعــات مــن محــاضر ولجــان واجتماعــات وخلافـه بمشــاركة جميــع المعنيــن وتحديــد الأدوار والمســؤوليات ومتابعــة تنفيــذ المهــام تــزداد الموثوقيــة والاعتمادية عــلى المعلومــات...",
      imgSrc: "../assets/features-2.png",
      altText: "Project governance",
    },
    {
      title: "إدارة ومتابعة المشاريع من خلال الجداول الزمنية",
      text: "لا شــك ان الجــداول الزمنيــة محــور رئيــسي لإدارة المشروعــات ومتابعــة اعمالهــا ونشطتاها المختلفــة ومســتوى تقــدم سـيـر العمــل والتعــرف عـلـى النقــاط الحرجــة والتعــرف المســبق عــلى المعوقــات...",
      imgSrc: "../assets/features-3.png",
      altText: "Project management with timelines",
    },
    {
      title: "تدقيق المستخلصات آليا باستخدام دورات عمل مرنة وفعالة",
      text: "دون التعــارض مــع أي أنظمــة أخــرى يمكــن لــكل جهــة اعتــاد الاســتغناء عــن الطريقــة الهرميــة في اعتــماد المســتخلصات الى الطريقــة الالكترونيــة باســتخدام دورات عمــل مرنــة...",
      imgSrc: "../assets/features-4.png",
      altText: "Automated audit of statements",
    },
  ];

  return (
    <section id="SystemProps" className="bg-gray-100 py-12 ">
      <div className="container mx-auto px-4">
        {sections.map((section, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center justify-between mb-8 p-4 bg-white rounded-lg shadow-md transition-transform duration-500 hover:scale-105"
          >
            <div className="md:w-1/2 p-4">
              <h2 className="text-xl font-semibold mb-3 text-gray-800 transition-opacity duration-500 hover:opacity-80">
                {section.title}
              </h2>
              <p className="text-gray-700 leading-relaxed transition-opacity duration-500 hover:opacity-80">
                {section.text}
              </p>
            </div>
            <div className="md:w-1/2 p-4 flex justify-center">
              <img
                src={section.imgSrc}
                alt={section.altText}
                className="rounded-lg shadow-md max-w-full transition-transform duration-500 hover:scale-105"
                style={{ maxHeight: "225px" }} // Adjust as needed
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SystemProps;
