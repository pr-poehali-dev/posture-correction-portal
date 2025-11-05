import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const exercises = [
  {
    id: 1,
    title: 'Мягкие наклоны в стороны',
    duration: '5 минут',
    reps: '3 подхода по 10 повторений на каждую сторону. Задержка 3 секунды',
    videoUrl: 'https://www.youtube.com/embed/nszFpgtJ7fY',
    description: 'Техника выполнения: Исходное положение - встать прямо, ноги на ширине плеч, одна рука на поясе, вторая поднята вверх, наклоните половину туловища от поясницы в сторону и потянитесь рукой, задержитесь в таком положении и повторите на другую сторону',
    equipment: ['Коврик для йоги']
  },
  {
    id: 2,
    title: 'Корректирующая походка',
    duration: '7 минут',
    reps: '4 минуты',
    videoUrl: 'https://www.youtube.com/embed/DRpz8v21Q2I',
    description: 'Техника выполнения: С развернутыми руками, ладони вперед, макушку тянем вверх, шагаем на месте - шаг назад - шаг вперед - шаг назад - шаг вперед с продвижением\nНюансы: Для усложнения выполнения упражнения, на макушку кладётся мешочек (в него можно насыпать гречку, или просто свернуть носочки)',
    equipment: ['Коврик для йоги']
  },
  {
    id: 3,
    title: 'Палец вверх, палец вниз',
    duration: '10 минут',
    reps: '3 подхода по 10 повторений',
    videoUrl: 'https://www.youtube.com/embed/qfUCTRb_ijw',
    description: 'Техника выполнения: Выпрямите спину, руки в стороны, большой палец вверх, поверните голову вправо, одновременно опуская большой палец левой руки вниз, затем поверните голову влево, одновременно поднимая большой палец левой руки вверх и опуская правый вниз',
    equipment: ['Коврик для йоги', 'Стена']
  },
  {
    id: 4,
    title: 'Подкручивание поясницы (маятник)',
    duration: '4 минуты',
    reps: '3 подхода по 10 повторений',
    videoUrl: 'https://www.youtube.com/embed/ObX8swXmQow',
    description: 'Техника выполнения: Лягте на спину, ноги согните в коленных суставах, стопы поставьте на поверхность, руки положите на выступающие тазовые кости и опустите подбородок, наклоняйте таз вперёд и назад, как будто наклоняете миску с водой. Нейтральное положение позвоночника находится посередине между этими положениями, где дискомфорт в позвоночнике минимален',
    equipment: ['Не требуется']
  },
  {
    id: 5,
    title: 'Подъем разноименных рук и ног',
    duration: '6 минут',
    reps: '3 подхода по 10 повторений',
    videoUrl: 'https://www.youtube.com/embed/uR8D6l5ji5A',
    description: 'Техника выполнения: Встаньте на четвереньки, кисти расположены на одной линии с плечами, колени на одной линии с бедрами, напрягаем мышцы пресса, поднимаем прямую руку параллельно полу, затем поднимаем выпрямленную противоположную ногу, задержитесь в положении и повторите в противоположную сторону',
    equipment: ['Коврик для йоги']
  },
  {
    id: 6,
    title: 'Упражнение "кошечка"',
    duration: '5 минут',
    reps: '3 подхода по 10 повторений. Задержка 3 секунды',
    videoUrl: 'https://www.youtube.com/embed/E5o7CypWPUM',
    description: 'Техника выполнения: Встаньте на четвереньки, прогните поясницу, затем скрутите грудной отдел. На прогибе делаем глубокий вдох, на скручивании плавный выдох',
    equipment: ['Коврик для йоги', 'Валик или полотенце']
  },
  {
    id: 7,
    title: 'Скручивания на валике',
    duration: '8 минут',
    reps: '3 подхода по 10 повторений',
    videoUrl: 'https://www.youtube.com/embed/4qpK-uVIzK8',
    description: 'Техника выполнения: Возьмите мягкий валик без протектора или скрутите полотенце, положите валик под лопатки. Ноги согните в коленных суставах, руки за голову, локти в стороны, сделайте глубокий вдох, распрямите грудной отдел и немного прогнитесь назад, с плавным выдохом скрутите грудной отдел с мягким движением вперёд',
    equipment: ['Коврик для йоги']
  }
];

const faqs = [
  {
    question: 'Как часто нужно выполнять упражнения?',
    answer: 'Для достижения ощутимых результатов рекомендуется выполнять комплекс упражнений от 2-х раз в неделю. При регулярных занятиях первые улучшения вы почувствуете уже через 2-3 недели.'
  },
  {
    question: 'Какие есть противопоказания к выполнению упражнений?',
    answer: 'Данные упражнения разработаны специально для профилактики и коррекции мышечного дисбаланса и профилактики сколиоза. Однако при острых стадиях болей в спине, болей в грудной клетке или болей при дыхании рекомендуется предварительно проконсультироваться с врачом.'
  },
  {
    question: 'Сколько времени занимает тренировка?',
    answer: 'Полный комплекс занимает от 20 до 30 минут. Вы также можете выбирать отдельные упражнения в зависимости от доступного времени и ваших потребностей.'
  },
  {
    question: 'Нужно ли специальное оборудование?',
    answer: 'Все упражнения можно выполнять в домашних условиях. Из оборудования вам понадобиться только коврик и мягкий валик без протектора, его можно заменить на скрученное полотенце. Для усложнения одного из упражнений понадобиться маленький мешочек, но на начальных этапах можно обойтись без него.'
  }
];

const allEquipment = [
  { name: 'Коврик для йоги', icon: 'LayoutGrid' },
  { name: 'Валик или полотенце', icon: 'Cylinder' },
  { name: 'Маленький мешочек', icon: 'Package' },
];

export default function Index() {
  const [selectedExercise, setSelectedExercise] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border" style={{ backgroundColor: '#303C30' }}>
        <div className="container mx-auto px-4 py-6">
          <h1 className="font-ardeco text-3xl font-semibold tracking-tight text-white">
            Упражнения для осанки
          </h1>
        </div>
      </header>

      <main>
        <section className="py-16 md:py-24" style={{ backgroundColor: '#FDFAF0' }}>
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in">
              <h2 className="font-ardeco text-5xl md:text-6xl font-light mb-6 leading-tight" style={{ color: '#303C30' }}>Здоровая спина — основа твоего благополучия</h2>
              <p className="text-lg leading-relaxed" style={{ color: '#303C30' }}>Проверенные упражнения, которые помогут тебе правильно и качественно работать над улучшением осанки и твоего самочувствия. Приведенные ниже упражнения подтверждены специалистами массажистами и тренерами по ЛФК.  </p>
            </div>
          </div>
        </section>

        <section className="py-12 bg-accent">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="font-ardeco text-3xl md:text-4xl font-light mb-3 text-accent-foreground">
                  Необходимый инвентарь
                </h2>
                <p className="text-accent-foreground/80">
                  Для комфортного выполнения всех упражнений вам понадобится:
                </p>
              </div>
              <div className="flex justify-center">
                <div className="flex flex-wrap gap-4 justify-center">
                  {allEquipment.map((item, index) => (
                    <Card 
                      key={index}
                      className="p-4 text-center hover:shadow-lg transition-all border-border/50 animate-scale-in bg-card"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <div className="flex flex-col items-center gap-3">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#303C30' }}>
                          <Icon name={item.icon} size={24} className="text-white" />
                        </div>
                        <p className="text-sm font-medium leading-tight">{item.name}</p>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12" style={{ backgroundColor: '#303C30' }}>
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto space-y-8">
              {exercises.map((exercise, index) => (
                <Card 
                  key={exercise.id}
                  className="overflow-hidden transition-all hover:shadow-xl animate-scale-in border-border/50"
                  style={{ animationDelay: `${index * 50}ms`, backgroundColor: '#FDFAF0' }}
                >
                  <div className="relative aspect-video overflow-hidden" style={{ backgroundColor: '#303C30' }}>
                    <iframe
                      src={exercise.videoUrl}
                      title={exercise.title}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <div className="p-6 md:p-8" style={{ backgroundColor: '#FDFAF0' }}>
                    <div className="mb-4">
                      <h3 className="font-ardeco text-3xl font-medium" style={{ color: '#303C30' }}>
                        {exercise.title}
                      </h3>
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <Icon name="Repeat" size={18} style={{ color: '#303C30' }} />
                      <span className="text-sm font-medium" style={{ color: '#303C30' }}>{exercise.reps}</span>
                    </div>
                    <p className="leading-relaxed whitespace-pre-line" style={{ color: '#303C30' }}>
                      {exercise.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24" style={{ backgroundColor: '#FDFAF0' }}>
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <h2 className="font-ardeco text-4xl md:text-5xl font-light mb-12 text-center" style={{ color: '#303C30' }}>
                Часто задаваемые вопросы
              </h2>
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="border border-border rounded-lg px-6"
                    style={{ backgroundColor: 'white' }}
                  >
                    <AccordionTrigger className="text-left font-ardeco text-xl py-6 hover:no-underline" style={{ color: '#303C30' }}>
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="pb-6 leading-relaxed" style={{ color: '#303C30' }}>
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24" style={{ backgroundColor: '#303C30' }}>
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-ardeco text-4xl md:text-5xl font-light mb-6" style={{ color: '#FDFAF0' }}>
                Запишитесь на диагностику
              </h2>
              <p className="text-lg mb-8 leading-relaxed" style={{ color: '#FDFAF0', opacity: 0.9 }}>
                Получите персональную консультацию и индивидуальную программу упражнений, 
                разработанную специально для вас
              </p>
              <div className="flex flex-col gap-6 items-center mb-8">
                <a 
                  href="tel:+79888923260" 
                  className="flex items-center gap-3 text-lg hover:opacity-80 transition-opacity"
                  style={{ color: '#FDFAF0' }}
                >
                  <Icon name="Phone" size={24} />
                  <span>+7 (988) 892-32-60</span>
                </a>
                <a 
                  href="https://wa.me/79888923260" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-lg hover:opacity-80 transition-opacity"
                  style={{ color: '#FDFAF0' }}
                >
                  <Icon name="MessageCircle" size={24} />
                  <span>WhatsApp</span>
                </a>
                <a 
                  href="mailto:pak1508@inbox.ru" 
                  className="flex items-center gap-3 text-lg hover:opacity-80 transition-opacity"
                  style={{ color: '#FDFAF0' }}
                >
                  <Icon name="Mail" size={24} />
                  <span>pak1508@inbox.ru</span>
                </a>
                <a 
                  href="https://t.me/+OdexWasMPSU5ZGVi" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-lg hover:opacity-80 transition-opacity"
                  style={{ color: '#FDFAF0' }}
                >
                  <Icon name="Send" size={24} />
                  <span>Telegram</span>
                </a>
              </div>
              <Button 
                size="lg" 
                className="font-medium px-8"
                style={{ backgroundColor: '#FDFAF0', color: '#303C30' }}
              >
                Записаться на консультацию
                <Icon name="ArrowRight" className="ml-2" size={18} />
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2024 Упражнения для осанки. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}