from selenium import webdriver
from django.contrib.staticfiles.testing import StaticLiveServerTestCase
from django.urls import reverse


class TestIndexPage(StaticLiveServerTestCase):
    def test_foo(self):
        self.assertEqual(1, 1)
