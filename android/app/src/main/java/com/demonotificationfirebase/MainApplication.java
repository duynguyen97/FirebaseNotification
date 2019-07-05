package com.demonotificationfirebase;

import android.app.Application;
import com.facebook.react.ReactActivity;
import com.facebook.react.ReactApplication;
import com.swmansion.gesturehandler.react.RNGestureHandlerPackage;
import io.invertase.firebase.RNFirebasePackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import io.invertase.firebase.messaging.RNFirebaseMessagingPackage;
import java.util.Arrays;
import java.util.List;

import io.invertase.firebase.functions.RNFirebaseFunctionsPackage; 
import io.invertase.firebase.notifications.RNFirebaseNotificationsPackage;
import io.invertase.firebase.links.RNFirebaseLinksPackage;
// import io.invertase.firebase.invites.RNFirebaseInvitesPackage;
public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new RNGestureHandlerPackage(),
            new RNFirebasePackage(),
               new RNFirebaseMessagingPackage(),
                new RNFirebaseNotificationsPackage(),
                  new RNFirebaseLinksPackage()
                  // new RNFirebaseInvitesPackage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
