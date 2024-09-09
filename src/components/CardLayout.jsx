const CardLayout = () => {
  return (
    <section
      id="CardLayout"
      className="py-8 px-4 md:px-8 lg:px-16 bg-gray-100 scroll-mt-32"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out text-center">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
              ادارة ومتابعة المشاريع عن بعد
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              آي ســكوب يقــدم لــك الحــل مــن خلال مجموعــة مــن الحلــول
              الالكترونيــة المتكاملــة ليتمكــن المسؤول وذوي القــرار مــن
              المعرفــة التامــة لواقــع المشروعــات مهـمـا كان بعدهــا الجغرافي
            </p>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out text-center">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
              متابعة لحظية لإنجاز المشاريع
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              يقــدم النظــام آليــات مختلفــة ومتنوعــة في رصــد نســب إنجــاز
              المشروعــات بمــا يتوافــق مــع الآليــات المتبعــة لــكل جهــة
              منهــا
            </p>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out text-center">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
              الاجراءات المناسبة في الوقت المناسب
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              يتمكــن متخــذي القــرار مــن اتخــاذ القــرارات الصحيحــة
              والمســتندة عـلـى معلومــات دقيقــة ومحدثــة لحظيــا مــن خــلال
              تقاريــر متنوعــة ومــؤشرات أداء
            </p>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out text-center">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
              اطلاع دائم لمستجدات المشاريع
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              يقــوم النظــام بتســجيل مدخــلات العمليــات وكافــة الإجــراءات
              ويتــم حفــظ المعلومــات ومعالجتهــا وتحليلهــا وعــرض احصائيــات
              ومــؤشرات ذات مرجعيــة موثقــة
            </p>
          </div>
        </div>

        <div className="mt-12 max-w-full sm:max-w-md mx-auto">
          <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out text-center">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
              بيئة عمل متصلة بشكل فعال
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              تمكن المنصة من خلال تطبيقاتها المختلفة التكاملية اللازمة لضمان
              التواصل الفعال بين جميع القائمين على المشروع وذلك من خلال بيئة
              المراسلات
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardLayout;
