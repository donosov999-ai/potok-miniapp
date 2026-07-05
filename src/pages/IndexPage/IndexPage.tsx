import { Section, Cell, List, Title, Caption } from '@telegram-apps/telegram-ui';
import { openLink, openTelegramLink } from '@tma.js/sdk-react';
import type { FC } from 'react';

import { Page } from '@/components/Page.tsx';

/* ─────────────────────────────────────────────
   КОНТЕНТ ВИТРИНЫ — правь только эти строки
   ───────────────────────────────────────────── */
const CONTACT = 'Denis_On999';                  // личный @username (без @)
const ASIBOTS_BOT = 'asibots999_bot';           // @-бот Asibots (открываем ВНУТРИ Telegram, а не сайт)
const EXAMPLES = 'https://t.me/denis_onosov9';  // ТГ-группа с примерами AI-генераций
const IG = 'https://instagram.com/odv999';      // Instagram
const LINK = {
  psygames: 'https://psy-games.pro',
  typerighting: 'https://donosov999-ai.github.io/typerighting-site/',
  asibots: 'https://asibots.pro',
};

const tg = (path: string) => openTelegramLink(`https://t.me/${path}`);
const web = (url: string) => openLink(url);

const Emoji: FC<{ e: string }> = ({ e }) => (
  <span style={{ fontSize: 28, lineHeight: '40px', width: 40, textAlign: 'center', display: 'inline-block' }}>{e}</span>
);

export const IndexPage: FC = () => {
  return (
    <Page back={false}>
      <List>
        {/* Шапка */}
        <div style={{ textAlign: 'center', padding: '24px 16px 8px' }}>
          <div style={{ fontSize: 44 }}>⚡</div>
          <Title weight="1" style={{ marginTop: 8 }}>Поток · ODV999</Title>
          <Caption level="1" style={{ color: 'var(--tgui--hint_color)' }}>
            AI-системы для бизнеса · собственные продукты
          </Caption>
        </div>

        {/* Услуги / Asibots — главное, первым */}
        <Section
          header="Asibots — AI-системы для бизнеса"
          footer="Этого бота и витрину я собрал сам за час — это уровень работы."
        >
          <Cell before={<Emoji e="🌐" />} subtitle="Превращают трафик в заявки, а не просто красивые" onClick={() => tg(ASIBOTS_BOT)}>
            Умные сайты
          </Cell>
          <Cell before={<Emoji e="🤖" />} subtitle="Клиенты и рутина на автопилоте 24/7" onClick={() => tg(ASIBOTS_BOT)}>
            AI-боты и автоматизация
          </Cell>
          <Cell before={<Emoji e="📊" />} subtitle="Ускоряет менеджеров или заменяет их" onClick={() => tg(ASIBOTS_BOT)}>
            CRM с AI
          </Cell>
        </Section>

        {/* AI-генерация */}
        <Section
          header="AI-генерация картинок и видео"
          footer="Батчами под бизнес: карточки товаров для маркетплейсов (Ozon, WB), визуал и баннеры для сайта. Не штучно — серия в едином стиле, дешевле."
        >
          <Cell before={<Emoji e="📸" />} subtitle="ТГ-группа с генерациями" onClick={() => web(EXAMPLES)}>
            Примеры работ
          </Cell>
          <Cell before={<Emoji e="📷" />} subtitle="@ODV999" onClick={() => web(IG)}>
            Instagram
          </Cell>
          <Cell before={<Emoji e="🎨" />} subtitle="Пачка под сайт или маркетплейс" onClick={() => tg(CONTACT)}>
            Заказать генерацию
          </Cell>
        </Section>

        {/* Продукты */}
        <Section header="Мои продукты">
          <Cell before={<Emoji e="🎮" />} subtitle="47 игр для тренировки мозга" onClick={() => web(LINK.psygames)}>
            PsyGames
          </Cell>
          <Cell before={<Emoji e="⌨️" />} subtitle="Тренажёр печати, 7 языков" onClick={() => web(LINK.typerighting)}>
            TypeRIGHTing
          </Cell>
        </Section>

        {/* Контакт */}
        <Section header="Связаться">
          <Cell before={<Emoji e="💬" />} subtitle="Написать Денису в личку" onClick={() => tg(CONTACT)}>
            Написать лично
          </Cell>
        </Section>
      </List>
    </Page>
  );
};
