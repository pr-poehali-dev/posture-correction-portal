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
    title: 'Растяжка грудного отдела',
    duration: '5 минут',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'Упражнение для раскрытия грудной клетки и улучшения осанки. Помогает снять напряжение после длительной работы за компьютером.',
    equipment: ['Коврик для йоги']
  },
  {
    id: 2,
    title: 'Укрепление мышц спины',
    duration: '7 минут',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'Комплекс для укрепления мышечного корсета спины. Эффективная профилактика сколиоза и болей в пояснице.',
    equipment: ['Гантели 1-2 кг', 'Коврик для йоги']
  },
  {
    id: 3,
    title: 'Коррекция осанки',
    duration: '10 минут',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'Базовые упражнения для восстановления правильного положения позвоночника и формирования здоровой осанки.',
    equipment: ['Коврик для йоги', 'Стена']
  },
  {
    id: 4,
    title: 'Расслабление шейного отдела',
    duration: '4 минуты',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'Мягкая растяжка для шеи и плеч. Устраняет зажимы и головные боли напряжения при сидячей работе.',
    equipment: ['Не требуется']
  },
  {
    id: 5,
    title: 'Упражнения для лопаток',
    duration: '6 минут',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'Укрепление межлопаточной зоны для правильной осанки. Помогает избавиться от сутулости и округлых плеч.',
    equipment: ['Эластичная лента', 'Коврик для йоги']
  },
  {
    id: 6,
    title: 'Растяжка поясницы',
    duration: '5 минут',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'Снятие напряжения в нижней части спины. Профилактика болей и улучшение гибкости поясничного отдела.',
    equipment: ['Коврик для йоги', 'Валик или полотенце']
  },
  {
    id: 7,
    title: 'Укрепление кора',
    duration: '8 минут',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'Комплекс для укрепления мышц центра тела. Стабилизирует позвоночник и улучшает общую физическую форму.',
    equipment: ['Коврик для йоги', 'Фитбол (опционально)']
  }
];

const faqs = [
  {
    question: 'Как часто нужно выполнять упражнения?',
    answer: 'Для достижения видимого результата рекомендуется выполнять комплекс упражнений 3-4 раза в неделю. При регулярных занятиях первые улучшения вы заметите уже через 2-3 недели.'
  },
  {
    question: 'Можно ли заниматься при сколиозе?',
    answer: 'Данные упражнения разработаны специально для профилактики и коррекции начальных стадий сколиоза. Однако при диагностированном сколиозе рекомендуется предварительно проконсультироваться с врачом.'
  },
  {
    question: 'Сколько времени занимает один сеанс?',
    answer: 'Полный комплекс занимает от 20 до 30 минут. Вы также можете выбирать отдельные упражнения в зависимости от доступного времени и ваших потребностей.'
  },
  {
    question: 'Нужно ли специальное оборудование?',
    answer: 'Все упражнения можно выполнять без специального оборудования в домашних условиях. Вам понадобится только удобная одежда и коврик для занятий.'
  }
];

const allEquipment = [
  { name: 'Коврик для йоги', icon: 'LayoutGrid' },
  { name: 'Гантели 1-2 кг', icon: 'Dumbbell' },
  { name: 'Эластичная лента', icon: 'Link' },
  { name: 'Валик или полотенце', icon: 'Cylinder' },
  { name: 'Фитбол (опционально)', icon: 'Circle' },
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
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
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
                    <div className="flex items-start justify-between mb-4 gap-4">
                      <h3 className="font-ardeco text-3xl font-medium" style={{ color: '#303C30' }}>
                        {exercise.title}
                      </h3>
                      <div className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap shadow-sm">
                        {exercise.duration}
                      </div>
                    </div>
                    <p className="leading-relaxed" style={{ color: '#303C30' }}>
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

        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-ardeco text-4xl md:text-5xl font-light mb-6">
                Готовы к более глубокой трансформации?
              </h2>
              <p className="text-lg mb-8 opacity-90 leading-relaxed">
                Получите персональную программу от профессионального инструктора
                с индивидуальным подходом и детальной поддержкой
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="font-medium px-8"
                >
                  Узнать подробнее
                  <Icon name="ArrowRight" className="ml-2" size={18} />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="font-medium px-8 bg-transparent border-primary-foreground/20 hover:bg-primary-foreground/10"
                >
                  Связаться с нами
                </Button>
              </div>
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