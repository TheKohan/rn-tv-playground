import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TVFocusGuideView,
  View,
  Image,
  ScrollView,
} from "react-native";
import React, { memo, useRef } from "react";

const Hero = () => {
  return (
    <TVFocusGuideView autoFocus>
      <View style={styles.hero}>
        <Text style={styles.text}>This is hero Image</Text>
        <TouchableOpacity style={styles.playButton}>
          <Text style={styles.text}>Play Now</Text>
        </TouchableOpacity>
      </View>
    </TVFocusGuideView>
  );
};

const GridItem = memo(
  ({ number, ref }: { number: number; ref?: React.RefObject<View> }) => {
    return (
      <TouchableOpacity
        style={{
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 10,
          overflow: "hidden",
          margin: 10,
        }}
        ref={ref}
      >
        <Image
          style={{
            width: 200,
            height: 100,
          }}
          source={{
            uri: `https://picsum.photos/200/100?random="${number}"`,
          }}
        />
      </TouchableOpacity>
    );
  }
);

const Grid = () => {
  const firstItemRef = useRef<View>(null);
  return (
    <View>
      <TVFocusGuideView trapFocusLeft destinations={[firstItemRef.current]}>
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          <GridItem number={1} ref={firstItemRef} />
          <GridItem number={2} />
          <GridItem number={3} />
          <GridItem number={4} />
          <GridItem number={5} />
          <GridItem number={6} />
          <GridItem number={7} />
          <GridItem number={8} />
          <GridItem number={9} />
          <GridItem number={10} />
          <GridItem number={11} />
          <GridItem number={12} />
          <GridItem number={13} />
          <GridItem number={14} />
          <GridItem number={15} />
          <GridItem number={16} />
          <GridItem number={17} />
          <GridItem number={18} />
          <GridItem number={19} />
          <GridItem number={20} />
        </View>
      </TVFocusGuideView>

      <View>
        <TouchableOpacity>
          <Text>Outside Button</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const NavItem = ({
  children,
  ref,
}: {
  children: React.ReactNode;
  ref?: React.RefObject<View>;
}) => {
  return (
    <TouchableOpacity style={styles.navItem} ref={ref}>
      {children}
    </TouchableOpacity>
  );
};

const Nav = () => {
  const about = useRef<View>(null);

  return (
    <TVFocusGuideView trapFocusRight destinations={[about.current]}>
      <View style={styles.nav}>
        <NavItem>
          <Text style={styles.text}>Home</Text>
        </NavItem>
        <NavItem ref={about}>
          <Text style={styles.text}>About</Text>
        </NavItem>
        <NavItem>
          <Text style={styles.text}>Live</Text>
        </NavItem>
        <NavItem>
          <Text style={styles.text}>Settings</Text>
        </NavItem>
      </View>
    </TVFocusGuideView>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <TVFocusGuideView autoFocus>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <Nav />
          <ScrollView style={{ flex: 1 }}>
            <Hero />
            <Grid />
          </ScrollView>
        </View>
      </TVFocusGuideView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 24,
  },
  hero: {
    padding: 20,
    backgroundColor: "red",
    width: "100%",
    height: 200,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  playButton: {
    padding: 10,
    backgroundColor: "blue",
    borderRadius: 10,
  },
  text: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
  nav: {
    padding: 20,
    borderRadius: 10,
    height: "100%",
    gap: 10,
  },
  navItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    backgroundColor: "magenta",
  },
});
