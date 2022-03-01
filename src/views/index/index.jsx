import { defineComponent } from "vue";
import { NDropdown } from "naive-ui";
import welcome from "@/assets/welcome.png";
const Index = defineComponent({
  name: "Index",
  components: {
    NDropdown,
  },
  setup() {
    const options = [
      {
        label: "滨海湾金沙，新加坡",
        key: "marina bay sands",
        disabled: true,
      },
      {
        label: "布朗酒店，伦敦",
        key: "brown's hotel, london",
      },
      {
        label: "亚特兰蒂斯巴哈马，拿骚",
        key: "atlantis nahamas, nassau",
      },
      {
        label: "比佛利山庄酒店，洛杉矶",
        key: "the beverly hills hotel, los angeles",
      },
    ];
    const handleSelect = () => {
      alert(123);
    };
    return () => {
      return (
        <div>
          <n-dropdown
            trigger="hover"
            options={options}
            onSelect={() => {
              handleSelect();
            }}
          >
            <n-button>找个地方休息</n-button>
          </n-dropdown>
          <img src={welcome} alt="welcome" title="welcome" />;
        </div>
      );
    };
  },
});

export default Index;
