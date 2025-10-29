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
    image: 'https://cdn.poehali.dev/projects/4922fce0-4ba3-4e5f-9244-9fdf899713e4/files/fbec2b26-4e10-4c81-a9c4-41a6fe3728c2.jpg',
    description: 'Упражнение для раскрытия грудной клетки и улучшения осанки. Помогает снять напряжение после длительной работы за компьютером.',
    videoUrl: '#'
  },
  {
    id: 2,
    title: 'Укрепление мышц спины',
    duration: '7 минут',
    image: 'https://cdn.poehali.dev/projects/4922fce0-4ba3-4e5f-9244-9fdf899713e4/files/032abecf-3f0e-4a7d-8d91-9d6a66ac643f.jpg',
    description: 'Комплекс для укрепления мышечного корсета спины. Эффективная профилактика сколиоза и болей в пояснице.',
    videoUrl: '#'
  },
  {
    id: 3,
    title: 'Коррекция осанки',
    duration: '10 минут',
    image: 'https://cdn.poehali.dev/projects/4922fce0-4ba3-4e5f-9244-9fdf899713e4/files/2ef96cd7-111e-4614-bf29-afcea360d770.jpg',
    description: 'Базовые упражнения для восстановления правильного положения позвоночника и формирования здоровой осанки.',
    videoUrl: '#'
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

export default function Index() {
  const [selectedExercise, setSelectedExercise] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-6">
          <h1 className="font-cormorant text-3xl font-semibold tracking-tight">
            Упражнения для осанки
          </h1>
        </div>
      </header>

      <main>
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in">
              <h2 className="font-cormorant text-5xl md:text-6xl font-light mb-6 leading-tight">
                Здоровая спина — основа вашего благополучия
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Простые и эффективные упражнения для профилактики сколиоза
                и улучшения осанки в домашних условиях
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {exercises.map((exercise, index) => (
                <Card 
                  key={exercise.id}
                  className="overflow-hidden group cursor-pointer transition-all hover:shadow-lg animate-scale-in border-border/50"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => setSelectedExercise(exercise.id)}
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img 
                      src={exercise.image} 
                      alt={exercise.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div className="absolute top-4 right-4">
                      <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                        {exercise.duration}
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-cormorant text-2xl font-medium mb-3">
                      {exercise.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {exercise.description}
                    </p>
                    <Button 
                      variant="ghost" 
                      className="w-full justify-between group/btn"
                    >
                      <span>Подробнее</span>
                      <Icon 
                        name="ArrowRight" 
                        className="transition-transform group-hover/btn:translate-x-1"
                        size={18}
                      />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <h2 className="font-cormorant text-4xl md:text-5xl font-light mb-12 text-center">
                Часто задаваемые вопросы
              </h2>
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="border border-border rounded-lg px-6 bg-card"
                  >
                    <AccordionTrigger className="text-left font-cormorant text-xl py-6 hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
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
              <h2 className="font-cormorant text-4xl md:text-5xl font-light mb-6">
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
