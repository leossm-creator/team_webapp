<template>
  <div>
    <sui-menu attached="top" secondary>
      <sui-menu-item name="AboutUs" link>
        About Us
      </sui-menu-item>

      <sui-menu-item name="OurWorks">
        <sui-dropdown item text="Our Works" simple>
          <sui-dropdown-menu>
            <sui-dropdown-item>신약</sui-dropdown-item>
            <sui-dropdown-item>공동 연구</sui-dropdown-item>
            <sui-dropdown-item>투자</sui-dropdown-item>
            <sui-dropdown-divider />
            <sui-dropdown-header>Export</sui-dropdown-header>
            <sui-dropdown-item>Share</sui-dropdown-item>
          </sui-dropdown-menu>
        </sui-dropdown>
      </sui-menu-item>

      <sui-menu-item name="Partnerships" link>
        Partnerships
      </sui-menu-item>

      <sui-menu-item name="ContactUs">
        <sui-dropdown item text="Contact Us" simple>
          <sui-dropdown-menu>
            <sui-dropdown-item>
              <sui-icon name="dropdown" />
              <span className="text">New</span>

              <sui-dropdown-menu>
                <sui-dropdown-item>Document</sui-dropdown-item>
                <sui-dropdown-item>Image</sui-dropdown-item>
              </sui-dropdown-menu>
            </sui-dropdown-item>
            <sui-dropdown-item>Open</sui-dropdown-item>
            <sui-dropdown-item>Save...</sui-dropdown-item>
            <sui-dropdown-item>Edit Permissions</sui-dropdown-item>
            <sui-dropdown-divider />
            <sui-dropdown-header>Export</sui-dropdown-header>
            <sui-dropdown-item>Share</sui-dropdown-item>
          </sui-dropdown-menu>
        </sui-dropdown>
      </sui-menu-item>
    </sui-menu>
    <sui-breadcrumb :sections="sections" />
  </div>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      sections: [
        { key: 'home', content: 'Home', link: true },
        { key: 'store', content: 'Store', link: true },
        { key: 'tshirt', content: 'T-Shirt', active: true },
      ],
    };  
  },

  methods: {
    toggleNav(name) {
      console.log(name);
    }
  },

}
</script>
<style scoped>

</style>