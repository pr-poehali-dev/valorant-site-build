import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

type AgentRole = 'all' | 'duelist' | 'controller' | 'sentinel' | 'initiator';

interface Agent {
  id: number;
  name: string;
  role: AgentRole;
  description: string;
  abilities: string[];
}

const agents: Agent[] = [
  {
    id: 1,
    name: 'Jett',
    role: 'duelist',
    description: 'Агрессивный агент с высокой мобильностью и способностью к быстрым прорывам.',
    abilities: ['Облако', 'Восходящий поток', 'Рывок', 'Клинки бури']
  },
  {
    id: 2,
    name: 'Sage',
    role: 'sentinel',
    description: 'Защитник команды, способный лечить союзников и воскрешать павших.',
    abilities: ['Барьерная сфера', 'Замедляющая сфера', 'Исцеляющая сфера', 'Воскрешение']
  },
  {
    id: 3,
    name: 'Phoenix',
    role: 'duelist',
    description: 'Универсальный дуэлянт с огненными способностями и возможностью самовосстановления.',
    abilities: ['Жаркая рука', 'Огненная стена', 'Изгиб', 'Второе дыхание']
  },
  {
    id: 4,
    name: 'Brimstone',
    role: 'controller',
    description: 'Тактический лидер, контролирующий территорию с помощью дымов и орбитальных ударов.',
    abilities: ['Зажигательная граната', 'Дымовая завеса', 'Маяк', 'Орбитальный удар']
  },
  {
    id: 5,
    name: 'Sova',
    role: 'initiator',
    description: 'Разведчик команды с способностью обнаруживать врагов на большом расстоянии.',
    abilities: ['Шоковый дротик', 'Дрон-разведчик', 'Стрела разведчика', 'Ярость охотника']
  },
  {
    id: 6,
    name: 'Cypher',
    role: 'sentinel',
    description: 'Мастер шпионажа, устанавливающий ловушки и собирающий информацию о противнике.',
    abilities: ['Кибер-клетка', 'Шпионская камера', 'Проволока-растяжка', 'Нейронный захват']
  }
];

const roleNames: Record<AgentRole, string> = {
  all: 'Все',
  duelist: 'Дуэлянты',
  controller: 'Стратеги',
  sentinel: 'Защитники',
  initiator: 'Инициаторы'
};

const faqs = [
  {
    question: 'Что такое Valorant?',
    answer: 'Valorant — это тактический 5v5 шутер от первого лица от Riot Games. Игра сочетает точную стрельбу с уникальными способностями агентов, создавая глубокий тактический геймплей.'
  },
  {
    question: 'Какие системные требования для игры?',
    answer: 'Минимальные требования: Intel Core 2 Duo E8400, 4GB RAM, Intel HD 4000. Рекомендуемые: Intel i3-4150, 4GB RAM, GeForce GT 730. Игра оптимизирована для широкого спектра ПК.'
  },
  {
    question: 'Сколько агентов в игре?',
    answer: 'В Valorant постоянно добавляются новые агенты. На старте было 10 агентов, сейчас их более 20. Каждый агент имеет уникальные способности и стиль игры.'
  },
  {
    question: 'Как выбрать роль в команде?',
    answer: 'Роли делятся на 4 типа: Дуэлянты (агрессия), Стратеги (контроль карты), Защитники (удержание точек) и Инициаторы (разведка). Выбирайте роль в зависимости от стиля игры и потребностей команды.'
  },
  {
    question: 'Есть ли в игре рейтинговый режим?',
    answer: 'Да, в Valorant есть полноценная рейтинговая система с рангами от Iron до Radiant. Также доступны обычные матчи, deathmatch и другие режимы.'
  }
];

export default function Index() {
  const [selectedRole, setSelectedRole] = useState<AgentRole>('all');

  const filteredAgents = selectedRole === 'all' 
    ? agents 
    : agents.filter(agent => agent.role === selectedRole);

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Target" className="text-primary-foreground" size={24} />
              </div>
              <h1 className="text-2xl font-bold">VALORANT</h1>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#home" className="text-sm font-medium hover:text-primary transition-colors">Главная</a>
              <a href="#agents" className="text-sm font-medium hover:text-primary transition-colors">Агенты</a>
              <a href="#tactics" className="text-sm font-medium hover:text-primary transition-colors">Тактики</a>
              <a href="#faq" className="text-sm font-medium hover:text-primary transition-colors">FAQ</a>
            </div>
            <Button className="hidden md:flex">Играть</Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://cdn.poehali.dev/projects/a929482a-f06a-4d59-8bb2-0c499e5a4bd0/files/10d9f1cd-cd09-49a3-8408-ff9a5cab702e.jpg" 
            alt="Valorant hero" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background"></div>
        </div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center animate-fade-in">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">5v5 Тактический Шутер</Badge>
            <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              DEFY THE LIMITS
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Тактический шутер от первого лица, где точная стрельба сочетается с уникальными способностями агентов
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="text-lg px-8">
                <Icon name="Download" className="mr-2" size={20} />
                Скачать игру
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                <Icon name="PlayCircle" className="mr-2" size={20} />
                Смотреть трейлер
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-card/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Crosshair" className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">Точная стрельба</h3>
                <p className="text-muted-foreground">Система отдачи без случайности. Навык решает всё</p>
              </CardContent>
            </Card>
            <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Zap" className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">Уникальные способности</h3>
                <p className="text-muted-foreground">Каждый агент обладает набором тактических умений</p>
              </CardContent>
            </Card>
            <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">Командная работа</h3>
                <p className="text-muted-foreground">Координация и стратегия — ключ к победе</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="agents" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Агенты</h2>
            <p className="text-xl text-muted-foreground">Выбирайте агента под свой стиль игры</p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {(Object.keys(roleNames) as AgentRole[]).map(role => (
              <Button
                key={role}
                variant={selectedRole === role ? "default" : "outline"}
                onClick={() => setSelectedRole(role)}
                className="min-w-[120px]"
              >
                {roleNames[role]}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
            {filteredAgents.map(agent => (
              <Card key={agent.id} className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-1">{agent.name}</h3>
                      <Badge variant="secondary">{roleNames[agent.role]}</Badge>
                    </div>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name="User" className="text-primary" size={24} />
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">{agent.description}</p>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold">Способности:</p>
                    <div className="flex flex-wrap gap-2">
                      {agent.abilities.map((ability, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {ability}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="tactics" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Тактики и советы</h2>
            <p className="text-xl text-muted-foreground">Основы для начинающих игроков</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Icon name="MapPin" className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Изучайте карты</h3>
                    <p className="text-sm text-muted-foreground">Знание каллаутов, позиций и углов даёт огромное преимущество</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Icon name="Crosshair" className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Контроль отдачи</h3>
                    <p className="text-sm text-muted-foreground">Тренируйтесь в стрельбище, изучайте спреи оружия</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Icon name="Mic" className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Коммуникация</h3>
                    <p className="text-sm text-muted-foreground">Используйте голосовой чат для координации с командой</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Icon name="DollarSign" className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Экономика</h3>
                    <p className="text-sm text-muted-foreground">Управляйте кредитами, покупайте вместе с командой</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Частые вопросы</h2>
            <p className="text-xl text-muted-foreground">Ответы на популярные вопросы об игре</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-primary/20 rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-left font-semibold hover:no-underline hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Target" className="text-primary-foreground" size={24} />
              </div>
              <span className="text-xl font-bold">VALORANT</span>
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Youtube" size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Twitter" size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Instagram" size={24} />
              </a>
            </div>
            <p className="text-sm text-muted-foreground">© 2024 Riot Games. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}