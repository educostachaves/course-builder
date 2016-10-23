import Course from './models/course';
import Chapter from './models/chapter';
import Content from './models/content';

export default function () {
  Course.count().exec((err, count) => {
    if (count > 0) {
      return;
    }
    const content1 = `Sed ut perspiciatis unde omnis iste natus error
      sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
      eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae
      vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
      aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
      qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
      ipsum quia dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
      enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
      ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
      in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
      occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum`;

    const content2 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
      enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
      ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
      in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
      occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum. Sed ut perspiciatis unde omnis iste natus error
      sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
      eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae
      vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
      aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
      qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
      ipsum quia dolor sit amet.`;

    const contentHTML = `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
      enim ad minim veniam.</p><p>Suis nostrud exercitation ullamco laboris nisi
      ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
      in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
      occaecat cupidatat non proident.</p><p>Sunt in culpa qui officia deserunt mollit anim id
      est laborum. Sed ut perspiciatis unde omnis iste natus error
      sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
      eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae
      vitae dicta sunt explicabo.</p><p>Nemo enim ipsam voluptatem quia voluptas sit
      aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
      qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
      ipsum quia dolor sit amet.</p>`;

    const c01 = new Course({ name: 'Course Test One', subtitle: 'Course Test One with N chapters available', slug: 'course-test-one', cuid: 'cikqgkv4q01ck7453ualdn3hd', price: '199.00', duration: '120.0', description: content1 });
    const c01CHPT01 = new Chapter({ title: 'Chapter One', course: 'cikqgkv4q01ck7453ualdn3hd', cuid: 'cikqgkv4q01ck7453ualdn1ab' });
    const c01CHPT02 = new Chapter({ title: 'Chapter Two', course: 'cikqgkv4q01ck7453ualdn3hd', cuid: 'cikqgkv4q01ck7453ualdn2ab' });
    const c01CHPT01CNT01 = new Content({ title: 'Content One', chapter: 'cikqgkv4q01ck7453ualdn1ab', cuid: 'cikqgkv4q01ck7453ualdn1cd', type: 'html', content: contentHTML });
    const c01CHPT01CNT02 = new Content({ title: 'Content Two', chapter: 'cikqgkv4q01ck7453ualdn1ab', cuid: 'cikqgkv4q01ck7453ualdn2cd', type: 'html', content: contentHTML });
    const c01CHPT02CNT01 = new Content({ title: 'Content One', chapter: 'cikqgkv4q01ck7453ualdn2ab', cuid: 'cikqgkv4q01ck7453ualdn3cd', type: 'html', content: contentHTML });
    const c01CHPT02CNT02 = new Content({ title: 'Content Two', chapter: 'cikqgkv4q01ck7453ualdn2ab', cuid: 'cikqgkv4q01ck7453ualdn4cd', type: 'html', content: contentHTML });

    const c02 = new Course({ name: 'Course Test Two', subtitle: 'Course Test Two with N chapters available', slug: 'course-test-two', cuid: 'cikqgkv4q01ck7453ualdn3hf', price: '299.00', duration: '150.0', description: content2 });
    const c02CHPT01 = new Chapter({ title: 'Chapter One', course: 'cikqgkv4q01ck7453ualdn3hf', cuid: 'cikqgkv4q01ck7453uafgh1ab' });
    const c02CHPT02 = new Chapter({ title: 'Chapter Two', course: 'cikqgkv4q01ck7453ualdn3hf', cuid: 'cikqgkv4q01ck7453uafgh2ab' });
    const c02CHPT01CNT01 = new Content({ title: 'Content One', chapter: 'cikqgkv4q01ck7453uafgh1ab', cuid: 'cikqgkv4q01ck7453uafgh1cd', type: 'html', content: contentHTML });
    const c02CHPT01CNT02 = new Content({ title: 'Content Two', chapter: 'cikqgkv4q01ck7453uafgh1ab', cuid: 'cikqgkv4q01ck7453uafgh2cd', type: 'html', content: contentHTML });
    const c02CHPT02CNT01 = new Content({ title: 'Content One', chapter: 'cikqgkv4q01ck7453uafgh2ab', cuid: 'cikqgkv4q01ck7453uafgh3cd', type: 'html', content: contentHTML });
    const c02CHPT02CNT02 = new Content({ title: 'Content Two', chapter: 'cikqgkv4q01ck7453uafgh2ab', cuid: 'cikqgkv4q01ck7453uafgh4cd', type: 'html', content: contentHTML });

    Course.create([c01, c02], (error) => {
      if (!error) {
        console.log('Inserted Courses');
        Chapter.create([c01CHPT01, c01CHPT02, c02CHPT01, c02CHPT01], (error) => {
          if (!error) {
            console.log('Inserted Chapters');
            Content.create([c01CHPT01CNT01, c01CHPT01CNT02, c01CHPT02CNT01, c01CHPT02CNT02, c02CHPT01CNT01, c02CHPT01CNT02, c02CHPT02CNT01, c02CHPT02CNT02], (error) => {
              if (!error) {
                console.log('Inserted Contents');
              } else { console.log('Fail to insert Contents', error); }
            });
          } else { console.log('Fail to insert Chapters', error); }
        });
      } else { console.log('Fail to insert Courses', error); }
    });
  });
}
