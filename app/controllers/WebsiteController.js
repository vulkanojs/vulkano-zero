/**
 * WelcomeController.js
 */

module.exports = {

  dashboard(req, res) {
    const data = {
      page: 'dashboard',
      title: 'Zero :: Vulkano'
    };
    res.render('website/dashboard.njk', data);

  }

};
