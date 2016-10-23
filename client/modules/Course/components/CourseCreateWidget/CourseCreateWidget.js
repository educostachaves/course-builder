import React, { Component, PropTypes } from 'react';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';

// Import Style
import styles from './CourseCreateWidget.css';

export class CourseCreateWidget extends Component {
  addCourse = () => {
    const nameRef = this.refs.name;
    const subtitleRef = this.refs.subtitle;
    const descriptionRef = this.refs.description;
    const priceRef = this.refs.price;
    const durationRef = this.refs.duration;
    if (nameRef.value && subtitleRef.value && descriptionRef.value && priceRef.value && durationRef.value) {
      this.props.addCourse(nameRef.value, subtitleRef.value, descriptionRef.value, priceRef.value, durationRef.value);
      nameRef.value = subtitleRef.value = descriptionRef.value = priceRef.value = durationRef.value = '';
    }
  };

  render() {
    const cls = `${styles.form} ${(this.props.showAddCourse ? styles.appear : '')}`;
    return (
      <div className={cls}>
        <div className={styles['form-content']}>
          <h2 className={styles['form-title']}><FormattedMessage id="createNewCourse" /></h2>
          <input type="text" placeholder="Type the course Name" className={styles['form-field']} ref="name" />
          <input type="text" placeholder="Type the course Subtitle" className={styles['form-field']} ref="subtitle" />
          <input type="number" step="2" placeholder="Type the course Price" className={styles['form-field']} ref="price" />
          <input type="number" step="1" placeholder="Type the course Duration" className={styles['form-field']} ref="duration" />
          <textarea placeholder={this.props.intl.messages.postContent} className={styles['form-field']} ref="description" />
          <a className={styles['post-submit-button']} href="#" onClick={this.addCourse}><FormattedMessage id="submit" /></a>
        </div>
      </div>
    );
  }
}

CourseCreateWidget.propTypes = {
  addCourse: PropTypes.func.isRequired,
  showAddCourse: PropTypes.bool.isRequired,
  intl: intlShape.isRequired,
};

export default injectIntl(CourseCreateWidget);
